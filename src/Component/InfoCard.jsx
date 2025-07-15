import { motion } from "framer-motion";

const InfoCard = ({ icon: Icon, title, children, iconColor = "text-brand-purple" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(155, 135, 245, 0.2)" }}
      transition={{ type: "spring", stiffness: 300 }}
      // Ensure the background is controlled by dark mode classes
      className="bg-white dark:bg-gray-800 shadow p-8 rounded-lg" // Removed 'glass-panel' and reordered
    >
      <div className="flex items-center mb-4">
        <div className="bg-brand-purple/10 p-3 rounded-lg mr-4">
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        {/* Make title text dynamic for light/dark mode */}
        <h3 className="text-xl font-semibold text-black dark:text-white">{title}</h3>
      </div>
      {/* Ensure children text also adapts, if applicable. This usually means setting a default text color on the parent (InfoCard's motion.div) like text-black dark:text-white */}
      <div className="text-black dark:text-white">
        {children}
      </div>
    </motion.div>
  );
};

export default InfoCard;