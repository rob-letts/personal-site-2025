<script setup lang="ts">
import type { ConcreteComponent } from 'vue'

type Link = {
  href: string
  icon: ConcreteComponent | string
  label: string
}

const links: Link[] = [
  {
    href: 'https://github.com/rob-letts',
    icon: resolveComponent('GitHubIcon'),
    label: 'GitHub Profile',
  },
  {
    href: 'https://www.linkedin.com/in/robertletts/',
    icon: resolveComponent('LinkedinIcon'),
    label: 'LinkedIn Profile',
  },
  {
    href: '/rob-letts-cv.pdf',
    icon: resolveComponent('DocumentIcon'),
    label: 'Curriculum Vitae',
  },
  {
    href: 'https://letterboxd.com/robletts/films/diary/',
    icon: resolveComponent('LetterboxdIcon'),
    label: 'Letterboxd Profile',
  },
  {
    href: 'https://bandcamp.com/robletts',
    icon: resolveComponent('BandcampIcon'),
    label: 'Bandcamp Profile',
  },
  {
    href: 'https://codepen.io/rob-letts/pens/public',
    icon: resolveComponent('CodepenIcon'),
    label: 'Codepen Profile',
  },
  {
    href: 'https://app.thestorygraph.com/profile/robletts',
    icon: resolveComponent('StoryGraphIcon'),
    label: 'StoryGraph Profile',
  },
]
</script>

<template>
  <aside>
    <ul class="icon-list">
      <li
        v-for="{ href, label, icon } in links"
        :key="href"
      >
        <SiteLink
          :href="href"
          :label="label"
        >
          <component :is="icon" />
        </SiteLink>
      </li>
    </ul>
  </aside>
</template>
