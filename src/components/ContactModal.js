import React from "react";

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg w-80 sm:w-96">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Contact Me</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Feel free to reach out to me for any job opportunities or collaborations!
          </p>
          <div className="mt-6 flex justify-end">
            <button
              className="px-4 py-2 bg-gray-900 text-white dark:bg-slate-200 dark:text-gray-900 rounded-lg"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactModal;
  