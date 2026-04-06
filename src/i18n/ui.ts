export const LANGUAGES = {
  en: "English",
  ja: "日本語",
};

export type Language = keyof typeof LANGUAGES;

export const defaultLang = "en";

/*
 * List of params for astro dynamic routing
 */
export const langParams = Object.keys(LANGUAGES).map((lang) => ({
  params: { lang: lang as Language },
}));

type TranslationKey = "about.mainText";

type Translation = Record<TranslationKey, string>;

export const translations: Record<Language, Translation> = {
  en: {
    "about.mainText":
      "Program-Specific Assistant Professor, Department of Mathematics, Kyoto University. My interests are soft active matter and low Reynolds number hydrodynamics, especially chiral active fluids.",
  },
  ja: {
    "about.mainText":
      "京都大学 理学研究科 数学教室　特定助教", ソフト・アクティブマター、低レイノルズ数流理力学、生物物理に興味があります",
  },
} as const;
