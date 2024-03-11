import React from "react";
import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={`${className}`}>
      <h5 className="mb-6 text-center tagline text-n-1/50">
        Helping peaple create beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((item, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={item} width={134} height={28} alt={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
