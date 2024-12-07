import * as React from "react";

const services = [
  {
    icon: "/service1.png",
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140"
  },
  {
    icon: "/Service2.png",
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support"
  },
  {
    icon: "/Service3.png",
    title: "MONEY BACK GUARANTEE",
    description: "We reurn money within 30 days"
  }
];

export function ServicesSection() {
  return (
    <section aria-label="Services" className="flex flex-wrap gap-10 justify-center items-center self-center my-32 text-black max-md:mt-10 max-md:max-w-full">
      {services.map((service, index) => (
        <ServiceItem
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </section>
  );
}
type ServiceItemProps = {
    icon: string;
    title: string;
    description: string;
  }
function ServiceItem({ icon, title, description }: ServiceItemProps) {
    return (
      <div className="flex flex-col items-center self-stretch my-auto min-w-[240px]">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain w-20 aspect-square"
        />
        <div className="flex flex-col items-center mt-6">
          <div className="text-xl font-semibold leading-snug">{title}</div>
          <div className="mt-2 text-sm text-center">{description}</div>
        </div>
      </div>
    );
  }
