import express from "express";
import db from "@repo/db/client";
import z from "zod";
const app = express();

app.use(express.json());

app.post("/hdfcWebhook", async (req, res) => {
  const HDFCWebhookSchema = z.object({
    token: z.string().min(1),
    user_identifier: z.number().min(1),
    amount: z.string().min(1),
  });

  const parsed = HDFCWebhookSchema.safeParse(req.body);
  if (!parsed.success) {
    console.error("Error parsing request body: ", parsed.error);
    return res.status(400).send({ message: "Bad Request" });
  }

  const paymentInformation = {
    token: parsed.data.token,
    userId: parsed.data.user_identifier,
    amount: parsed.data.amount,
  };

  try {
    await db.$transaction([
      db.balance.updateMany({
        where: {
          userId: paymentInformation.userId,
        },
        data: {
          amount: {
            increment: Number(paymentInformation.amount),
          },
        },
      }),
      db.onRampTransaction.updateMany({
        where: {
          token: paymentInformation.token,
        },
        data: {
          status: "Success",
        },
      }),
    ]);

    res.json({
      message: "Captured",
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      message: "Error while processing webhook",
    });
  }
});

app.listen(3003, () => {
  console.log("Server is running on port 3003");
});
