const config = {
  siteTitle: "Open Climate Fix",
  siteTitleShort: "Open Climate Fix",
  siteTitleAlt: "Open Climate Fix",
  siteLogo: "/logos/logo-1024.png", // Used for SEO and manifest.
  siteUrl: "https://openclimatefix.github.io",
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "We are a new non-profit research and development lab, totally focused on reducing greenhouse gas emissions as rapidly as possible.",
  siteRss: "/rss.xml",
  googleAnalyticsID: "UA-144752608-1",
  disqusShortname: "open-climate-fix",
  postDefaultCategoryID: "Organisation",
  dateFromFormat: "YYYY-MM-DD", // Used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Used for display.
  userName: "Jack Kelly",
  userEmail: "info@openclimatefix.org",
  userTwitter: "jack_kelly",
  userLocation: "London, United Kingdom",
  userAvatar: "/avatars/jack-400.png",
  userDescription: "I try to mitigate climate change using computer science. Previously, I was a Research Engineer at DeepMind, mostly working on energy problems. Now I am a co-founder at Open Climate Fix.",
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/openclimatefix",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/jack_kelly",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "info@openclimatefix.org",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2019 Open Climate Fix Ltd.",
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
