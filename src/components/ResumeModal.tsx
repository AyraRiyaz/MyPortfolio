import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Eye, FileText } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume/Resume-Ayra.pdf";
    link.download = "Ayra_Riyaz_Resume.pdf";
    link.click();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-4xl max-h-[90vh] glass border border-primary-500/30 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-theme-border bg-gradient-to-r from-primary-500/10 to-secondary-500/10">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-500/20 rounded-lg">
                  <FileText className="text-primary-400" size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-theme-text">
                    K P Ayra Riyaz - Resume
                  </h2>
                  <p className="text-theme-text-secondary text-sm">
                    Full Stack Developer & AI/ML Enthusiast
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <motion.button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={18} />
                  Download
                </motion.button>
                
                <motion.button
                  onClick={onClose}
                  className="p-2 text-theme-text-secondary hover:text-theme-text hover:bg-theme-surface rounded-lg transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>
              </div>
            </div>

            {/* Resume Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="w-full h-[800px] bg-white rounded-lg shadow-lg overflow-hidden">
                <iframe
                  src="/resume/Resume-Ayra.pdf"
                  className="w-full h-full border-0"
                  title="Ayra Riyaz Resume"
                />
              </div>
              
              {/* Fallback for browsers that don't support iframe PDF viewing */}
              <div className="mt-4 text-center">
                <p className="text-theme-text-secondary text-sm mb-4">
                  Can't view the resume? Download it directly below.
                </p>
                <motion.button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} />
                  Download Resume PDF
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;