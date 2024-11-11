import Logo from "@/public/assets/images/logo/apr-facility-logo.svg";
import Link from "next/link";
import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="footer absolute w-full bg-color-eeee text-slate-600 p-4 flex items-center">
      <div className="w-full gap-20 flex items-center justify-evenly below-400:items-center below-400:w-[75%] below-400:gap-10 below-400:flex-col">
        <div className="flex flex-col items-center justify-center below-400:p-[10px] w-full below-400:items-start">
          <div className="pb-[10px]">
            <Logo width={220} height={100} />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-start gap-1 text-xs">
              <div className="flex gap-2">
                <div className="flex flex-col items-start">
                  <p>H.N.222B, NKV Residency Behind DPG College,</p>
                  <p>Gurgaon, Haryana-122001</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="font-bold">Contact No: </div> +91-9310774669
              </div>
              <div className="flex gap-2">
                <div className="font-bold">Email: </div> aprfacility@gmail.com
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 justify-evenly w-full items-center below-400:items-start">
          <div className="text-2xl">Quick Links</div>
          <div className="flex flex-col gap-2 quick-links">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/clients">Cients</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>

        <div className="w-full flex below-400:flex-col justify-center items-center below-400:items-start">
          <Image
            src="/assets/images/iso9001.png"
            alt="Description of the image"
            width={100}
            height={100}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
