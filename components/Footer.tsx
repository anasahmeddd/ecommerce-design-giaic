import { footerSections } from '@/lib/constant';
import { FacebookIcon, InstagramIcon, LinkedinIcon, SendHorizonal, TwitterIcon } from 'lucide-react';
import * as React from 'react';

export const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <FacebookIcon />, alt: "Facebook", href: "https://facebook.com" },
    { icon: <TwitterIcon />, alt: "Twitter", href: ' https://twitter.com' },
    { icon: <InstagramIcon />, alt: "Instagram", href: 'https://instagram.com ' },
    { icon: <LinkedinIcon />, alt: "LinkedIn", href: 'https://linkedIn.com' }
  ];

  return (
    <footer className="flex overflow-hidden flex-col justify-end pt-20 pb-6 mt-8 w-full bg-black max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-center items-start self-center max-md:max-w-full">
        <div className="flex flex-col text-neutral-50">
          <div className="flex flex-col self-start">
            <div className="flex flex-col max-w-full whitespace-nowrap w-[118px]">
              <div className="w-full text-2xl font-bold tracking-wider leading-none">
                Exclusive
              </div>
              <div className="mt-6 text-xl font-medium leading-snug">
                Subscribe
              </div>
            </div>
            <div className="mt-6 text-base">Get 10% off your first order</div>
          </div>
          <form className="mt-4">
            <label htmlFor="email" className="sr-only">Enter your email</label>
            <div className="flex gap-1 lg:gap-3 justify-center rounded-md p-2 items-center border-2 border-neutral-50">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="bg-transparent text-neutral-50 outline-none "
                aria-label="Enter your email"
              />
              <button type="submit">
                <SendHorizonal />
              </button>
            </div>
          </form>
        </div>

        {footerSections.map((section, index) => (
          <FooterSection key={index} {...section} />
        ))}

        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="text-xl font-medium leading-snug text-neutral-50">
              Download App
            </div>
            <div className="flex flex-col mt-6">
              <div className="text-xs font-medium opacity-70 text-neutral-50">
                Save $3 with App New User Only
              </div>
              <div className="flex gap-2 items-center mt-2">
                <img
                  loading="lazy"
                  src={'/qrcode.png'}
                  alt="QR Code to download app"
                  className="object-contain shrink-0 self-stretch my-auto w-20 aspect-square"
                />
                <div className="flex flex-col self-stretch my-auto w-[110px]">
                  <a href="https://play.google.com/store/games?hl=en" target='_blank'>
                    <img
                      loading="lazy"
                      src={'/playstore.png'}
                      alt="Get it on Google Play"
                      className="object-contain max-w-full aspect-[2.75] w-[110px]"
                    />
                  </a>
                  <a href="https://www.apple.com/app-store/" target='_blank'>
                    <img
                      loading="lazy"
                      src={'/appstore.png'}
                      alt="Download on App Store"
                      className="object-contain mt-1 max-w-full aspect-[2.75] w-[110px]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6 items-start self-start mt-6">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" tabIndex={0} className='text-white'>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="w-full bg-white border border-white border-solid opacity-40 min-h-[1px] max-md:max-w-full" />
        </div>
        <div className="flex gap-3 items-center mt-4 text-base text-white">
          <div className="flex gap-1.5 items-center self-stretch my-auto min-w-[240px]">
            &copy;
            <div className="self-stretch my-auto">
              Copyright Nextjs Ecommerce Design for giaic hackathon practice 2022. All right reserved Made By Anas Ahmed
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => (
  <div className="flex flex-col text-neutral-50">
    <div className="text-xl font-medium leading-snug">{title}</div>
    <div className="flex flex-col mt-6 text-base">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className={index > 0 ? "mt-4" : ""}
          tabIndex={0}
        >
          {link.text}
        </a>
      ))}
    </div>
  </div>
);

