import type Article from "~/interfaces/article";
import { getDate } from "#imports";

const getDefinedArticle = (article: Article) => {
return defineArticle({
          '@type': 'BlogPosting',
          headline: article.title,
          description: article.synopsis,
          image: article.image,
          thumbnailUrl: article.image,
          wordCount: article.content.split(' ').length,
          inLanguage: 'fr-FR',
          keywords: article.tags,
          datePublished: getDate(article.date),
          dateModified: article.date,
          author: [
            {
              name: article.author,
              url: window.location.origin,
            }
          ],
          publisher: {
            name: 'Sensvinylo',
            logo: {
              '@type': 'ImageObject',
              url: `${window.location.origin}/logo.webp`,
            }
          },
        });
}

export default getDefinedArticle;