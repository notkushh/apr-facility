import { Slack } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="footer absolute bottom-0 w-full flex bg-gray-800 text-slate-600 p-4 gap-6 below-400:flex-col below-400:items-start">
      <div className="flex flex-col items-center justify-center below-400:p-[10px]">
        <Slack height={50} width={50} color="green" />
        <div className="text-center flex flex-col gap-4">
            <h1 className="text-lg font-bold">APR Facilities Services Private Limited</h1>
            <div className='flex flex-col items-start gap-1 text-xs'>
                <div className='flex gap-2'>
                    {/* <p className='font-bold'>Address: </p> */}
                    <div className='flex flex-col items-start'>
                        <p>H.N.222B, NKV Residency Behind DPG College,</p> <p>Gurgaon, Haryana-122001</p>
                    </div>
                </div>
                <div className='flex gap-2'><div className='font-bold'>Contact No: </div> +91-9310774669</div>
                <div className='flex gap-2'><div className='font-bold'>Email: </div> aprfacility@gmail.com</div>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-3 justify-evenly below-400:p-[10px]'>
        <div className='text-2xl'>
            Quick Links
        </div>
        <div className='flex flex-col gap-2 quick-links'>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/clients">Cients</Link>
            <Link href="/contact">Contact Us</Link>
        </div>
      </div>

      {/* <div>
        <Image 
            src="/assets/images/icon-arrow-left.svg"
            alt="Description of the image"
            width={500}
            height={300} 
        />
      </div> */}
    </footer>
  );
}

export default Footer;
