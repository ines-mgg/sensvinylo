const getDefinedPage = (url: string, name: string, description: string, hasPrimaryImage?: boolean) => {
  return defineWebPage({
    "@type": "WebPage",
    url,
    name,
    description,
    inLanguage: "fr-FR",
    primaryImageOfPage: hasPrimaryImage ? "/banner.webp" : undefined,
  });
};

export default getDefinedPage;
