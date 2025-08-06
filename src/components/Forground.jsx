import React, { useRef } from "react";
import Card from "./Card";

const Forground = () => {
  const ref = useRef(null);
  const Cards = [
    {
      title: "API Reference",
      description: "Complete REST endpoint documentation.",
      filesize: "4.3mb",
      hidden: false,
      favorite: false,
      downloadable: true,
      downloadLink: "/test.pdf",
      close: false,
      tagInfo: {
        isOpen: true,
        tagTitle: "API",
        tagColor: "blue",
      },
    },
    {
      title: "Getting Started",
      description: "Setup instructions and project intro.",
      filesize: "2mb",
      hidden: false,
      favorite: true,
      downloadable: false,
      close: false,
      tagInfo: {
        isOpen: true,
        tagTitle: "Guide",
        tagColor: "green",
      },
    },
    {
      title: "FAQ",
      description: "Frequently asked questions answered.",
      filesize: "1mb",
      hidden: false,
      favorite: false,
      downloadable: false,
      close: false,
      tagInfo: {
        isOpen: false,
        tagTitle: "",
        tagColor: "",
      },
    },
    {
      title: "Changelog",
      description: "Version history and release notes.",
      filesize: "500kb",
      hidden: false,
      favorite: false,
      downloadable: true,
      downloadLink: "/changelog.txt",
      close: false,
      tagInfo: {
        isOpen: true,
        tagTitle: "Update",
        tagColor: "purple",
      },
    },
    {
      title: "Contributing",
      description: "How to contribute to the repository.",
      filesize: "650kb",
      hidden: true,
      favorite: false,
      downloadable: false,
      close: true,
      tagInfo: {
        isOpen: false,
        tagTitle: "",
        tagColor: "",
      },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed w-full h-full z-30 top-0 left-0 p-5 flex gap-5 flex-wrap"
    >
      {Cards.map((card, idx) => (
        <Card key={idx} reference={ref} {...card} />
      ))}
    </div>
  );
};

export default Forground;
