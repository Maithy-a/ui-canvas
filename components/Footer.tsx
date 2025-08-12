import { Github, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 mt-12 py-6 px-4 sm:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">

        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} UI Canvas. All rights reserved. By{" "}
          <Link
            href="#"
            className="text-blue-500 hover:underline hover:underline-offset-4 hover:text-blue-600"
          >
            Maithya ✮⋆˙
          </Link>
        </p>

        <div className="flex gap-4 h-4 items-center">
          <Link
            href="https://github.com/maithy-a"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-transform duration-200 hover:scale-110"
          >
            <Github className="w-6 h-6 sm:w-6 sm:h-6" />
          </Link>

          <Separator orientation="vertical" />

          <Link
            href="https://www.instagram.com/_b0nni3.__"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-transform duration-200 hover:scale-110"
          >
            <Instagram className="w-6 h-6 sm:w-6 sm:h-6" />
          </Link>

          <Separator orientation="vertical" />

          <Link
            href="https://www.linkedin.com/in/maithya"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-transform duration-200 hover:scale-110"
          >
            <Linkedin className="w-6 h-6 sm:w-6 sm:h-6" />
          </Link>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
