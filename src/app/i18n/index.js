import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { getOptions } from './settings'

const initI18next = async (lng, ns) => {
  const i18nInstance = createInstance()
  await i18nInstance
    .use(resourcesToBackend((language, namespace) => import(`./locales/${language}/${namespace}.json`)))
    .init(getOptions(lng, ns))
  return i18nInstance
}

// Renamed from useTranslation to getTranslation to avoid ESLint react-hooks/rules-of-hooks error.
// This is NOT a React Hook — it is a plain async server-side utility function.
export async function getTranslation(lng, ns, options = {}) {
  const i18nextInstance = await initI18next(lng, ns)
  return {
    t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns, options.keyPrefix),
    i18n: i18nextInstance
  }
}

// Alias kept for backward compatibility with any files that still import useTranslation
export { getTranslation as useTranslation }