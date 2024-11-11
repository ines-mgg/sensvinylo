import type FAQ from "~/interfaces/FAQ";

const getDefinedQuestion = (faq: FAQ) => {
  return defineQuestion({
    name: faq.title,
    acceptedAnswer: faq.description,
  });
};

export default getDefinedQuestion;