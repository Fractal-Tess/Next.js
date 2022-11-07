import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Image from 'next/image';
import HorizontalNav from '$components/nav/HorizontalNav';
import ThemeToggle from '$components/theme/ThemeToggle';
import { navLinks } from '$data/navLinks';

export default function Header() {
  return (
    <div className="bg-base-100 md:h-12  shadow-xl flex justify-between px-4 items-center">
      <Link href="/" className="h-8 w-8 relative">
        <Image src="/logo.png" width={28} height={28} alt="logo image" />
      </Link>

      <HorizontalNav navLinks={navLinks} />

      <div className="[&>*:hover]:text-primary [&>*]:duration-300 [&>*]:transition-colors flex items-center space-x-2">
        <Link
          href="https://github.com/Fractal-Tess/Turborepo-React"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="h-6" />
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
}
