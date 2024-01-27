<template>
  <main>
    <section class="text-gray-600 body-font">
      <section
        class="overflow-hidden bg-[url('~/assets/images/archived.jpeg')] bg-cover bg-top bg-no-repeat">
        <div class="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="text-center ltr:sm:text-left rtl:sm:text-right">
            <div class="flex flex-wrap w-full mb-20 justify-center items-center flex-col">
              <div class="lg:w-1/2 w-full mb-6 lg:mb-0 flex justify-center items-center flex-col gap-y-3">
                <h1 class="sm:text-3xl text-3xl font-medium title-font mb-2 text-white">OUR OBJECTIVES</h1>
                <div class="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="container px-5 py-24 mx-auto">
        <!-- <div class="text-center mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Our Objectives</h1>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div> -->
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div class="p-4 md:w-1/3 flex" v-for="(objective, idx) in objectives" :key="objective._id">
            <div
              class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                class="w-6 h-6" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div class="flex-grow pl-6">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">Objective ({{ idx + 1 }})</h2>
              <p class="leading-relaxed text-base">{{ objective.description }}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section class="text-gray-600 body-font pb-10">
      <div class="text-center mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Our Challange</h1>
        <div class="flex mt-6 justify-center">
          <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
      </div>
      <div class="container px-5 mx-auto">
        <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8"
            viewBox="0 0 975.036 975.036">
            <path
              d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
            </path>
          </svg>
          <p class="leading-relaxed text-lg"> In the 21st century, Civil Society Movements in favour of
            stability, safety and development face many challenges: not only
            wars and arms proliferation climate change but also human rights
            violations, discrimination, hate and ignorance, emergencies, and
            abuse of the earth resources. Millions are now mobilizing to
            oppose the process of globalization and inequality, which breeds
            conflicts of all kinds. What is needed is a globalization of
            safety and stability that promote human values and sustainable
            solution for political and socio-economic development</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import community_objectives from '@/database/objectives.json'
export default {
  name: "about-us",
  scrollToTop: true,
  data() {
    return {
      objectives: community_objectives,
      title: "About Pan African",
      description:
        "Pan Africa; Original thinking, research help add to human knowledge",
      image:
        "https://res.cloudinary.com/marquis/image/upload/v1668940037/enagoshtazxadezqqjrj.png",
    };
  },
  head() {
    return {
      title: 'About PANAFSTRAG',
      meta: [
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.description,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.image,
        },
        {
          hid: "twitter:image:alt",
          name: "twitter:image:alt",
          content: this.title,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.title,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.description,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.image,
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: this.image,
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: this.title,
        },
      ],
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
