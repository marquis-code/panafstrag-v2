<template>
  <main class="relative">
    <ssr-carousel loop :autoplay-delay='3'>
      <section class="overflow-hidden bg-[url(@/assets/images/hero.jpg)] bg-cover bg-top bg-no-repeat"
        v-for="(itm, idx) in carousels" :key="idx">
        <div class="bg-black/80 h-screen p-8 md:p-12 lg:px-16 lg:py-60 grid place-items-center place-content-center">
          <div class="ltr:sm:text-left rtl:sm:text-right mt-6">
            <h2 class="text-2xl font-black text-white sm:text-3xl md:text-5xl">
              {{ itm.title }}
            </h2>

            <p class="max-w-lg text-gray-50 md:mt-6 md:block md:text-lg md:leading-relaxed pt-6">
              {{ itm.description }}
            </p>
<!--
            <div class="mt-4 sm:mt-8">
              <a href="#"
                class="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400">
                Join Us
              </a>
            </div> -->
          </div>
        </div>
      </section>
    </ssr-carousel>
  </main>
</template>

<script>
import SsrCarousel from 'vue-ssr-carousel'
import ssrCarouselCss from 'vue-ssr-carousel/index.css'
export default {
  components: {
    SsrCarousel
  },
  data() {
    return {
      navLinks: [
        {
          title: 'Product',
          path: '/coming-soon'
        },
        {
          title: 'Health Library',
          path: '/coming-soon'
        },
        {
          title: 'Calculators',
          path: '/coming-soon'
        },
        {
          title: 'About',
          path: '/coming-soon'
        },
        {
          title: 'Clinicians',
          path: '/coming-soon'
        }
      ],
      carousels: [
        {
          title: "PANAFSTRAG Mission Statement",
          description:
            "Pan-Africana Strategic and Policy Research Group (PANAFSTRAG) is a group of willing Africana People coming together voluntarily to deliver original thinking through in-depth study, research, and analyses that benefit Africana people worldwide.",
          imgUrl: 'hero.jpeg'
        },
        {
          title: "Transparency",
          description:
            "Openness in the conduct of organization's affairs and observation of laid down procedures.",
          imgUrl: 'hero2.jpeg'
        },
        {
          title: "Integrity",
          description:
            "PANAFSTRAG is responsive, responsible, professional, sensitive to the needs of others, tolerance and responsiveness to criticisms and pro-activity.",
          imgUrl: 'hero2.jpeg'
        },
        {
          title: "Probity & Accountability",
          description:
            "PANAFSTRAG regard office, power and authority as a trust with the obligation to render services and give timely account of stewardship.",
          imgUrl: 'hero.jpeg'
        },
        {
          title: 'Social Justice',
          description:
            "PANAFSTRAG ensures fairness, equity and equal opportunity in apportioning responsibility and resources.",
          imgUrl: 'hero2.jpeg'
        },
        {
          title: "Human Dignity",
          description:
            "Respect for human life and the human person and promotion of access to meaningful existence.",
          imgUrl: 'hero.jpeg'
        }
      ]
    }
  },
  methods: {
    openSidebar() {

    }
  }
}
</script>

<style></style>
