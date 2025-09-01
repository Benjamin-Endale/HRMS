import React, { useState } from "react";

const CopyButton = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2s
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
    ><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 1.66699C12.942 1.66709 13.3658 1.84274 13.6783 2.15533L17.0117 5.48866C17.3242 5.80115 17.4999 6.225 17.5 6.66699M12.5 1.66699H9.16667C8.72464 1.66699 8.30072 1.84259 7.98816 2.15515C7.6756 2.46771 7.5 2.89163 7.5 3.33366V12.5003C7.5 12.9424 7.6756 13.3663 7.98816 13.6788C8.30072 13.9914 8.72464 14.167 9.16667 14.167H15.8333C16.2754 14.167 16.6993 13.9914 17.0118 13.6788C17.3244 13.3663 17.5 12.9424 17.5 12.5003V6.66699M12.5 1.66699V5.00033C12.5 5.44235 12.6756 5.86628 12.9882 6.17884C13.3007 6.4914 13.7246 6.66699 14.1667 6.66699H17.5M4.16667 5.83366C3.72464 5.83366 3.30072 6.00925 2.98816 6.32181C2.67559 6.63437 2.5 7.0583 2.5 7.50033V16.667C2.5 17.109 2.67559 17.5329 2.98816 17.8455C3.30072 18.1581 3.72464 18.3337 4.16667 18.3337H10.8333C11.1259 18.3337 11.4133 18.2566 11.6666 18.1104C11.92 17.9641 12.1304 17.7537 12.2767 17.5003" stroke="#5D6150" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      {copied && (
    <span className="p-3 text-lemongreen font-semibold cursor-pointer">
      Copied!
    </span>
  )}
    </button>
    
  );
};

export default CopyButton;
