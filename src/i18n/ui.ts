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
      "Department of Living Matter Physics, Max Planck Institute for Dynamics and Self-Organization (MPIDS-LMP). My interests are soft active matter and low Reynolds number hydrodynamics, especially chiral active fluids.",
  },
  ja: {
    "about.mainText":
      "Department of Living Matter Physics, Max Planck Institute for Dynamics and Self-Organization (MPIDS-LMP). My interests are soft active matter and low Reynolds number hydrodynamics, especially chiral active fluids.",
  },
} as const;
