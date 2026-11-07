import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { content, paths, profile } from './data'

// Donne à chaque page la langue courante, ses textes et ses liens.
export function useSite() {
  const route = useRoute()
  const lang = computed(() => route.meta.lang || 'fr')
  const t = computed(() => content[lang.value])
  const other = computed(() => (lang.value === 'fr' ? 'en' : 'fr'))
  const switchPath = computed(() => paths[other.value][route.meta.page || 'home'])
  const link = (page) => paths[lang.value][page]

  return { route, lang, t, link, switchPath, profile }
}
