import { IconCopyright } from "@tabler/icons";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-myGray pt-28">
      <main className="md:grid md:grid-cols-2 md:space-y-0 gap-y-20 space-y-20 text-center py-12 text-mySand text-lg font-myHeading">
        <div className="">
          <header className="text-myOrange font-myHeading font-bold text-4xl">
            CONTACT <br />
            {/* Contact <br /> */}
          </header>
          Ph: (702)XXX-XXXX <br />
          Email: email@gmail.com
        </div>

        <div className="">
          <header className="text-myOrange font-myHeading font-bold text-4xl">
            HOURS <br />
            {/* Hours <br /> */}
          </header>
          Mon-Thurs: xAM - yPM <br />
          Fri-Sat: xAM - yPM <br />
          Sun: Closed
        </div>

        <div className="col-span-2">[LOGO]</div>
      </main>

      {/* Copyright */}
      <p className="flex gap-x-1 items-center text-mySalmon font-myHeading text-sm">
        {/* <p className="text-center text-mySalmon font-myHeading text-sm"> */}
        <IconCopyright size={18} /> 2022 [Company] — Website by avilldaniel
      </p>
    </footer>
  );
};

export default Footer;
