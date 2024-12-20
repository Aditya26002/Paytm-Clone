# Paytm Wallet Project

## Overview

This project is a full-stack payment application that enables seamless peer-to-peer (P2P) money transfers. It is built using Next.js and Tailwind CSS for the frontend, and Prisma ORM for managing backend processes. The application ensures secure and efficient transactions with robust authentication and real-time updates.

## Features

1. **Responsive Frontend**: Built using Next.js and Tailwind CSS for a visually engaging, responsive user experience across devices.
2. **Backend Management**: Managed user balances and transactions via Prisma ORM, ensuring data integrity and consistency.
3. **P2P Money Transfers**: Developed a seamless peer-to-peer money transfer feature, allowing users to transfer funds securely and efficiently.
4. **Secure Authentication**: Integrated NextAuth.js for secure user authentication, enabling users to manage their accounts and transaction history.
5. **Real-time Updates**: Enhanced user experience with real-time updates and notifications using Express.js for handling webhooks.
6. **Continuous Improvement**: Committed to consistently applying new skills to update and enhance functionality and user experience.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/paytm-wallet.git
   cd paytm-wallet
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the necessary environment variables:

   ```env
   DATABASE_URL=your_database_url
   NEXTAUTH_URL=your_nextauth_url
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

4. Run the development server:

   ```sh
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. Register or log in to your account.
2. Add funds to your wallet.
3. Transfer funds to other users securely and efficiently.
4. View your transaction history and manage your account settings.

## Technologies Used

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Prisma ORM, Express.js
- **Authentication**: NextAuth.js
- **Database**: PostgreSQL (or your preferred database)

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma ORM](https://www.prisma.io/)
- [NextAuth.js](https://next-auth.js.org/)
- [Express.js](https://expressjs.com/)
