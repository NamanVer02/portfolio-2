"use client";

import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { IoIosFolderOpen } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { motion } from "framer-motion";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    name: "Home",
    path: "/",
    icon: <AiFillHome size={24} />,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: <IoIosFolderOpen size={24} />,
  },
  {
    name: "About",
    path: "/about",
    icon: <IoPerson size={24} />,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: <AiFillMessage size={24} />,
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <motion.nav
      className="fixed bottom-6 left-0 right-0 z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: 0.2,
      }}
    >
      <div className="flex justify-center px-4">
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {/* Glassmorphic container */}
          <motion.div
            className="absolute inline-flex bg-black/70 inset-0 backdrop-blur-xs rounded-full border border-neutral-800/40"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          />

          {/* Navigation items */}
          <div className="relative flex items-center justify-center h-14 gap-8 px-10">
            {navItems.map((item, index) => {
              const isActive = pathname === item.path;
              return (
                <motion.div
                  key={item.path}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                >
                  <Link href={item.path} className="block">
                    <motion.div
                      className={`flex items-center justify-center gap-2 ${
                        isActive ? "text-white" : "text-neutral-500"
                      }`}
                      whileHover={{
                        scale: 1.2,
                        y: -2,
                      }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        scale: isActive ? 1.1 : 1,
                        y: isActive ? -1 : 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                    >
                      {item.icon}
                      {isActive && (
                        <motion.span
                          className="text-sm font-medium text-white whitespace-nowrap"
                          initial={{ opacity: 0, x: -10, scale: 0.8 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          exit={{ opacity: 0, x: -10, scale: 0.8 }}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                            duration: 0.3,
                          }}
                        >
                          {item.name}
                        </motion.span>
                      )}
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
