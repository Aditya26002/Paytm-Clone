"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function createOnrampTransactions(
  provider: string,
  amount: number
) {
  const session = await getServerSession(authOptions);
  const userId = session.user.id;
  // the token here should be coming from the banking provider
  const token = Math.random().toString();
  if (!userId) {
    return {
      message: "Suer not logged in",
    };
  }
  await prisma.onRampTransaction.create({
    data: {
      provider,
      status: "Processing",
      startTime: new Date(),
      token: token,
      userId,
      amount: amount * 100,
    },
  });
}
