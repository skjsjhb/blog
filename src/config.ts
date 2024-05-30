import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: "skjsjhb's blog",
  subtitle: 'NullPointerException!',
  lang: 'zh_CN',         // 'en', 'zh_CN', 'zh_TW', 'ja'
  themeColor: {
    hue: 210,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false,     // Hide the theme color picker for visitors
  },
  banner: { 
    enable: false,
    // Yes you must put something here or it complains
    src: 'assets/images/skjsjhb.webp',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  },
  favicon: [    // Leave this array empty to use the default favicon
    {
      src: '/skjsjhb.webp',    // Path of the favicon, relative to the /public directory
    }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/skjsjhb',     // Internal links should not include the base path, as it is automatically added
      external: true,                               // Show an external link icon and will open in a new tab
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/skjsjhb.webp',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'Ted "skjsjhb" Gao',
  bio: 'People typing without coding. People building without creating.',
  links: [
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/skjsjhb',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: false, // Our license is complex
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
