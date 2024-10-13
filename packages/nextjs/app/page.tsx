"use client";

import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Felicidades has Ganado el Bingo</span>
            <div className="block text-4xl font-bold">
              <div className="inline-block relative w-20 h-20 align-bottom mr-2">
                <Image alt="Base logo" className="cursor-pointer" fill src="/Basado.svg" />
              </div>
            </div>
          </h1>
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            <p className="my-2 font-medium">Conectado como:</p>
            <Address address={connectedAddress} />
          </div>
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Mintea tu Premio</span>
            <div className="block text-4xl font-bold">
            </div>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
