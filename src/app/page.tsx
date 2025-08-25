"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import { Landing } from "@/data/landingPage";
import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-100 via-blue-50 to-white px-6 overflow-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mt-20"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent mb-6"
          animate={{
            y: [0, -10, 0], // floating effect
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="flex items-center justify-center">
            <Image src={"/logo3.svg"} alt="logo" width={50} height={50} />
            <Link href={"/"}>
              <p className=" font-bold bg-gradient-to-b from-purple-500 via-blue-500 to-blue-300 bg-clip-text text-transparent">
                ne Peace
              </p>
            </Link>
          </div>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"
          animate={{
            opacity: [1, 0.7, 1], // breathing effect
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          Belajar lebih cepat, lebih pintar, dan lebih menyenangkan dengan
          platform learning course yang ditenagai oleh{" "}
          <span className="font-semibold">AI</span>.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <motion.div
            animate={{
              scale: [1, 1.05, 1], // tombol berdenyut idle
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Link href="/workspace">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 shadow-lg"
              >
                Mulai Belajar
              </Button>
            </Link>
          </motion.div>
          <Link href={"/workspace/explore"}>
            <Button size="lg" variant="outline" className="hover:bg-blue-50">
              Jelajahi Kursus
            </Button>
          </Link>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.3 },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-6xl w-full"
      >
        {Landing?.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="rounded-2xl shadow-lg hover:shadow-xl transition-transform bg-white min-h-[300px]">
              <CardContent className="flex flex-col items-center text-center p-8">
                <feature.icon className="w-12 h-12 text-purple-600" />
                <h3 className="font-semibold text-xl mb-2 mt-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent mb-6">
          Siap memulai perjalanan belajar Anda?
        </h2>
        <motion.div
          animate={{
            scale: [1, 1.05, 1], // idle pulsing
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Link href={"/sign-up"}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 shadow-xl"
            >
              Daftar Sekarang
            </Button>
          </Link>
        </motion.div>
      </motion.section>

      <footer className="mt-20 text-center text-gray-500 text-sm pb-6">
        © {new Date().getFullYear()} One Peace. All rights reserved.
      </footer>
    </main>
  );
}
