export default defineAppConfig({
  docus: {
    title: 'SREDevOps.org',
    description: 'Noticias, Tutoriales, Información, Comunidad DevOps, Site Reliability Engineering (SRE) y Platform Engineering 🌎 🇨🇱 🇧🇷 🇪🇸',
    image: '/SREOPS.png',
    socials: {
      twitter: '@sredevopsorg',
      github: 'sredevopsdev',

      nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://nuxt.com'
      },

      facebook: 'https://facebook.com/sredevops',
      instagram: 'https://instagram.com/sredevopsorg',
      youtube: 'https://youtube.com/@sredevopsorg',
      linkedin: 'https://linkedin.com/company/sredevops'
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'ngeorger',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
      title: 'SREDevOps.org',
      showSearch: false
    }
  }
})