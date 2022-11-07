import type { NavLink } from '$types/NavLink';

export const navLinks: NavLink[] = [
  {
    target: {
      href: '/'
    },
    content: {
      text: 'Home'
    }
  },
  {
    target: {
      href: '/blog'
    },
    content: {
      text: 'Blog'
    }
  },
  {
    target: {
      href: '/About'
    },
    content: {
      text: 'About'
    }
  },
  {
    target: {
      href: '/err'
    },
    content: {
      text: 'err'
    }
  }
];
