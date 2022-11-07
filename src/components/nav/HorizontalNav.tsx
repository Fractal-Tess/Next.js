import Link from 'next/link';
import type { NavLink } from '$types/NavLink';

type Props = {
  navLinks: NavLink[];
};

export default function HorizontalNav({ navLinks }: Props) {
  return (
    <nav>
      <ul className="flex space-x-4 font-bold text-lg">
        {navLinks.map(({ content, target }, i) => {
          return (
            <li key={i}>
              <Link
                href={target.href}
                target={target.newTab ? '_blank' : undefined}
              >
                {content.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
