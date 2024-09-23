import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    // URL of the PDF file
    const fileUrl = '/assets/CV-KO.pdf'; // Replace with the actual file path or URL

    // Create an anchor element and simulate a click
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = '/public/assest/CV-KO.pdf'; // Replace with the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload}>
     <a class="bg-gray-950  text-white rounded-lg px-5 py-2 text-sm" href="/assets/CV-KO.pdf" download="CV-KO.pdf" >Download CV</a>
    </button>
  );
};

export default DownloadButton;
