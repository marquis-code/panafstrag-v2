<template>
  <main>
    <section class="text-gray-600 body-font">
      <section
        class="overflow-hidden bg-[url('~/assets/images/group.jpg')] bg-cover bg-top bg-no-repeat"
      >
        <div class="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="text-center ltr:sm:text-left rtl:sm:text-right">
            <div
              class="flex flex-wrap w-full mb-20 justify-center items-center flex-col"
            >
              <div
                class="lg:w-1/2 w-full mb-6 lg:mb-0 flex justify-center items-center flex-col gap-y-3"
              >
                <h1
                  class="sm:text-3xl text-3xl font-medium title-font mb-2 text-white"
                >
                  OUR CELLS
                </h1>
                <div class="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="container px-5 py-24 mx-auto">
        <!-- <div class="text-center mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Our Cells</h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle crucifix vinyl
            post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.
          </p>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div> -->
        <div
          class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6"
        >
          <div
            class="p-4 md:w-1/3 flex flex-col text-center items-center"
            v-for="(itm, idx) in cells"
            :key="idx"
          >
            <div
              class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div class="flex-grow">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                {{ itm.title }}
              </h2>
              <p class="leading-relaxed text-base">{{ itm.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h1
            class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4"
          >
            Boaed Members Duties
          </h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
            pug.
          </p>
        </div>
        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div
            class="p-2 sm:w-1/2 w-full"
            v-for="responsibility in boardResponsibilities"
            :key="responsibility._id"
          >
            <div class="bg-gray-100 rounded flex p-4 h-full items-center">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                viewBox="0 0 24 24"
              >
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span class="title-font font-medium">
                {{ responsibility.description }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import board_responsibilities from "@/database/responsibilities.json";
export default {
  name: "cells",
  scrollToTop: true,
  data() {
    return {
      boardResponsibilities: board_responsibilities,
      isOpen: true,
      cells: [
        {
          title: "Cell 1",
          description:
            " Economy (including Cultural & Creative) Trade, Business and Finances",
          url: "",
        },
        {
          title: "Cell 2",
          description:
            "Soft Power Diplomacy, Africana Public Institutions Representation and Liaisons. All Media, ETC and Awareness Campaign: “I am an Africana” Establishing PANAFSTRAG TV/RADIO by 2024",
          url: "",
        },
        {
          title: "Cell 3",
          description:
            "Our Story, Africana Indigenous Knowledge Systems, Philosophy, Technology Culture and Arts.",
          url: "",
        },
        {
          title: "Cell 4",
          description: "Development, Education and Health",
          url: "",
        },
        {
          title: "Cell 5",
          description:
            " Digital Transformation and Cyber-security-4IR, Public, Private and CSOs",
          url: "",
        },
        {
          title: "Cell 6",
          description: "Legal",
          url: "",
        },
      ],
      title: "Pan Africa Cells",
      description:
        "Pan Africa; Original thinking, research help add to human knowledge",
      image:
        "https://res.cloudinary.com/marquis/image/upload/v1668940037/enagoshtazxadezqqjrj.png",
    };
  },
  head() {
    return {
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
      title: "PANAFSTRAG Cells",
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
