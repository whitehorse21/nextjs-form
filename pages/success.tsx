import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

export default function Success() {
  const router = useRouter();

  const [pieces, setPieces] = useState(200);
  const stopConfetti = () => {
    setTimeout(() => setPieces(0), 3000);
  };

  useEffect(() => stopConfetti(), []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center py-8"
    >
      <div className="bg-white rounded-lg w-[min(100%,_1024px)] font-latoRegular text-gray-700 p-16 laptop:mx-6 tablet:p-10">
        <h1 className="text-3xl pb-4 font-latoBold">
          Thanks for the Email {router.query.name} ✨
        </h1>
        <p className="text-lg text-gray-500">
          We have sent you an email over at{" "}
          <span className="text-teal-500">{router.query.email}</span>. We will
          get back to you as soon we can!
        </p>
      </div>
      <Confetti numberOfPieces={pieces} />
    </motion.main>
  );
}
