// components/CustomLabelLink.tsx
import Link from "next/link";
import React from "react";

interface CustomLabelLinkProps {
  label: string;
  url: string;
}

const CustomLabelLink: React.FC<CustomLabelLinkProps> = ({ label, url }) => {
  return (
    <Link
      href={`/label-page?url=${encodeURIComponent(
        url
      )}&label=${encodeURIComponent(label)}`}
    >
      {label}
    </Link>
  );
};

export default CustomLabelLink;
