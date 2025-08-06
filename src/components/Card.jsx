import React from "react";
import { motion } from "framer-motion";
import { IoClose, IoDocumentTextOutline } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";

const Card = ({
  title,
  description,
  tagInfo,
  downloadLink,
  downloadable,
  hidden,
  favorite,
  filesize,
  reference,
  close,
}) => {
  if (hidden) return null;

  return (
    <motion.div
      drag
      dragConstraints={reference}
      dragElastic={0.1}
      whileDrag={{ scale: 1.05 }}
      dragTransition={{ bounceStiffness: 120, bounceDamping: 10 }}
      className={`relative flex-shrink-0 w-60 h-72 rounded-3xl bg-zinc-800 text-white px-5 py-8 overflow-hidden ${
        favorite ? "ring-2 ring-yellow-400" : ""
      }`}
    >
      <IoDocumentTextOutline size={22} />

      <h2 className="mt-2 text-lg font-semibold">{title}</h2>
      <p className="text-xs mt-2 leading-tight">{description}</p>

      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex items-center justify-between mb-2 px-8 py-3">
          {filesize && <h5 className="text-xs">{filesize}</h5>}

          <span className="w-7 h-7 bg-zinc-900 rounded-full flex items-center justify-center">
            {close ? (
              <IoClose size=".8em" color="#ff0000" />
            ) : downloadable ? (
              <a href={downloadLink} download>
                <LuDownload size=".8em" color="#ffffff" />
              </a>
            ) : (
              <LuDownload size=".8em" color="#ffffff" />
            )}
          </span>
        </div>

        {tagInfo?.isOpen && (
          <div
            className={`flex items-center justify-center w-full py-4 bg-${tagInfo.tagColor}-900`}
          >
            <h3 className="text-md font-semibold">{tagInfo.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
