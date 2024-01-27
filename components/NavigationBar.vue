<template>
  <header class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex-1 md:flex md:items-center md:gap-12">
          <nuxt-link class="block text-teal-600 no-underline" to="/">
            <span class="sr-only">Home</span>
            <h1 class="font font-serif font-extrabold text-lg sr-only">PANAFSTRAG</h1>
            <img src="@/assets/icons/logo.png" alt="logo" class="h-14 w-14" />
          </nuxt-link>
        </div>

        <div>
          <nav aria-label="Global"
            class="md:flex md:items-center md:gap-12 md:static absolute left-0 top-16 md:w-auto duration-100 ease-in"
            :class="[open ? 'left-0 bg-black h-screen w-full text-white z-50' : 'left-[-100%]']">
            <ul class="md:flex items-center gap-6 text-sm"
              :class="[open ? 'left-0 bg-black text-white h-screen z-50 w-full space-y-10 px-6 pt-10' : 'left-[-100%]']">
              <li>
                <nuxt-link class="text-gray-500 transition hover:text-gray-500/75 no-underline" to="/">
                  Home
                </nuxt-link>
              </li>

              <li>
                <nuxt-link class="text-gray-500 transition hover:text-gray-500/75 no-underline" to="/archived">
                  Archives
                </nuxt-link>
              </li>

              <li>
                <nuxt-link class="text-gray-500 transition hover:text-gray-500/75 no-underline" to="/programmes">
                  Programmes
                </nuxt-link>
              </li>
              <!-- <li>
                <nuxt-link class="text-gray-500 transition hover:text-gray-500/75 no-underline" to="/programmes">
                  Radio
                </nuxt-link>
              </li> -->
              <li :class="[open ? 'block' : 'hidden']" class="space-y-8 flex flex-col">
                <nuxt-link :to="itm.url" v-for="(itm, idx) in aboutMenue" :key="idx"
                  class="text-gray-500 transition hover:text-gray-500/75 no-underline">
                  {{ itm.name }}</nuxt-link>
              </li>
              <li :class="[open ? 'hidden' : 'block']">
                <div class="group relative cursor-pointer py-2">
                  <div class="flex items-center justify-between bg-white px-4">
                    <a class="menu-hover my-2 py-2 text-sm font-medium no-underline lg:mx-4 text-gray-500 transition flex items-center gap-x-2 hover:text-gray-500/75"
                      onClick="">
                      About Us
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" class="h-6 w-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </a>
                  </div>
                  <div class="w-60">
                    <div
                      class="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible"
                      onClick="">
                      <nuxt-link :to="itm.url" v-for="(itm, idx) in aboutMenue" :key="idx"
                        class="my-2 block border-b border-gray-100 py-1 text-sm font-semibold text-gray-500 hover:text-black md:mx-2">
                        {{ itm.name }}</nuxt-link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          <div class="flex items-center gap-4">
            <div class="block md:hidden">
              <button @click="toggle" class="rounded transition hover:text-gray-600/75">
                <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg v-if="open" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 24 24" fill="none"
                  stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      aboutMenue: [
        {
          name: 'Board Members',
          url: '/board-members'
        },
        {
          name: 'Organogram',
          url: '/organogram'
        },
        {
          name: ' PANAFSTRAG Cells',
          url: '/cells'
        },
        {
          name: 'Objectives',
          url: '/about-us'
        },
        {
          name: 'Language Groups',
          url: '/language-groups'
        },
        {
          name: 'Focus Area',
          url: '/focus-area'
        }
      ]
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  },
  watch: {
    '$route'() {
      this.open = false
    }
  }
}
</script>

<style scoped>
.nuxt-link-exact-active {
  color: green;
  font: bolder;
  text-decoration: underline;
}
</style>

