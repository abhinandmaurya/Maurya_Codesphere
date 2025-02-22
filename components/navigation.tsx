import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 200 },
    },
    exit: { x: "100%", opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-lg">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Sparkles className="w-8 h-8 text-[#CCFF00]" />
          <span className="text-xl font-bold">Maurya CodeSphere</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["/services", "/features", "/about", "/pricing", "/works"].map(
            (path) => (
              <motion.div
                key={path}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={path}
                  className={`hover:text-[#CCFF00] transition-colors ${
                    isActive(path) ? "text-[#CCFF00]" : ""
                  }`}
                >
                  {path.replace("/", "").charAt(0).toUpperCase() +
                    path.slice(2)}
                </Link>
              </motion.div>
            )
          )}
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link href="/contact">
              <Button className="bg-[#CCFF00] text-black hover:bg-[#CCFF00]/90">
                Contact Us <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white"
          whileTap={{ scale: 0.8 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="fixed top-0 right-0 w-3/4 h-screen bg-black p-6 flex flex-col gap-6 shadow-lg"
            >
              <motion.button
                className="self-end"
                whileTap={{ scale: 0.8 }}
                onClick={() => setIsOpen(false)}
              >
                <X className="w-8 h-8 text-white" />
              </motion.button>
              {["/services", "/features", "/about", "/pricing", "/works"].map(
                (path) => (
                  <motion.div key={path} whileTap={{ scale: 0.95 }}>
                    <Link
                      href={path}
                      className={`text-lg hover:text-[#CCFF00] transition-colors ${
                        isActive(path) ? "text-[#CCFF00]" : "text-white"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {path.replace("/", "").charAt(0).toUpperCase() +
                        path.slice(2)}
                    </Link>
                  </motion.div>
                )
              )}
              {/* Mobile Contact Button */}
              <motion.div whileTap={{ scale: 0.95 }}>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-[#CCFF00] text-black hover:bg-[#CCFF00]/90 justify-between">
                    Contact Us
                    <div className="flex gap-1">
                      <ArrowRight className="w-4 h-4" />
                      <ArrowRight className="w-4 h-4" />
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
