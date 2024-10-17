import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
  }

export default function Button ({children}: LayoutProps) {
    return(
        <a className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)]
         hover:shadow-[0_6px_20px_rgba(0,118,255,23%)]
       hover:bg-[rgba(0,140,255,0.99)]
         hover:cursor-pointer
         px-8 py-2 bg-[#0070f3] rounded-md
        text-white font-light
         transition duration-200 ease-linear">
        {children}
        </a>
        )
}