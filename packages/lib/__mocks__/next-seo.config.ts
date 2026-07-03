vi.mock("@calcom/lib/next-seo.config", () => ({
  default: {
    headSeo: {
      siteName: "Cal.ly",
    },
    defaultNextSeo: {
      title: "Cal.ly",
      description: "Scheduling infrastructure for everyone.",
    },
  },
  seoConfig: {
    headSeo: {
      siteName: "Cal.ly",
    },
  },
  buildSeoMeta: vi.fn().mockReturnValue({}),
}));
