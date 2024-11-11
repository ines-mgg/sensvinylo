const getSeoMeta = (title: string, description: string) => {
  return useSeoMeta({
    title,
    ogTitle: title,
    description,
    ogDescription: description,
    ogImage: "/banner.webp",
    twitterCard: "summary_large_image",
  });
};

export default getSeoMeta;
