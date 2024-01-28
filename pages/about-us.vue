<template>
  <main>
    <section class="text-gray-600 body-font">
      <div
        class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8"
      >
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          class="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style="
              clip-path: polygon(
                74.1% 44.1%,
                100% 61.6%,
                97.5% 26.9%,
                85.5% 0.1%,
                80.7% 2%,
                72.5% 32.5%,
                60.2% 62.4%,
                52.4% 68.1%,
                47.5% 58.3%,
                45.2% 34.5%,
                27.5% 76.7%,
                0.1% 64.9%,
                17.9% 100%,
                27.6% 76.8%,
                76.1% 97.7%,
                74.1% 44.1%
              );
            "
          ></div>
        </div>
        <div
          class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style="
              clip-path: polygon(
                74.1% 44.1%,
                100% 61.6%,
                97.5% 26.9%,
                85.5% 0.1%,
                80.7% 2%,
                72.5% 32.5%,
                60.2% 62.4%,
                52.4% 68.1%,
                47.5% 58.3%,
                45.2% 34.5%,
                27.5% 76.7%,
                0.1% 64.9%,
                17.9% 100%,
                27.6% 76.8%,
                76.1% 97.7%,
                74.1% 44.1%
              );
            "
          ></div>
        </div>
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Objectives
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            We’re a dynamic group of individuals who are passionate about what
            we do.
          </p>
        </div>
      </div>
      <!-- <section
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
      </section> -->
      <div class="container px-5 py-24 mx-auto">
        <!-- <div class="text-center mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Our Objectives</h1>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div> -->
        <!-- <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
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

        </div> -->
        <div class="bg-white">
          <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
              <div>
                <h2 class="text-base font-semibold leading-7 text-indigo-600">
                  Everything you need
                </h2>
                <p
                  class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                  Our Objectives
                </p>
                <p class="mt-6 text-base leading-7 text-gray-600">
                  PANAFSTRAG Objectives are outlined below
                </p>
              </div>
              <dl
                class="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16"
              >
                <div
                  class="relative pl-9"
                  v-for="(objective, idx) in objectives"
                  :key="objective._id"
                >
                  <dt class="font-semibold text-gray-900">
                    <svg
                      class="absolute left-0 top-1 h-5 w-5 text-indigo-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Objective ({{ idx + 1 }})
                  </dt>
                  <dd class="mt-2">
                    {{ objective.description }}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          <div class="lg:pr-4">
            <div
              class="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10"
            >
              <img
                class="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                src="@/assets/images/group.jpg"
                alt=""
              />
              <div
                class="absolute inset-0 bg-gray-900 mix-blend-multiply"
              ></div>
              <div
                class="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                aria-hidden="true"
              >
                <div
                  class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-40"
                  style="
                    clip-path: polygon(
                      74.1% 44.1%,
                      100% 61.6%,
                      97.5% 26.9%,
                      85.5% 0.1%,
                      80.7% 2%,
                      72.5% 32.5%,
                      60.2% 62.4%,
                      52.4% 68.1%,
                      47.5% 58.3%,
                      45.2% 34.5%,
                      27.5% 76.7%,
                      0.1% 64.9%,
                      17.9% 100%,
                      27.6% 76.8%,
                      76.1% 97.7%,
                      74.1% 44.1%
                    );
                  "
                ></div>
              </div>
              <figure class="relative isolate">
                <svg
                  viewBox="0 0 162 128"
                  fill="none"
                  aria-hidden="true"
                  class="absolute -left-2 -top-4 -z-10 h-32 stroke-white/20"
                >
                  <path
                    id="0ef284b8-28c2-426e-9442-8655d393522e"
                    d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                  />
                  <use href="#0ef284b8-28c2-426e-9442-8655d393522e" x="86" />
                </svg>
                <img
                  src="https://tailwindui.com/img/logos/workcation-logo-white.svg"
                  alt=""
                  class="h-12 w-auto"
                />
                <blockquote
                  class="mt-6 md:text-xl font-semibold leading-8 text-white"
                >
                  <p>
                    “Pan-Africana Strategic and Policy Research Group
                    (PANAFSTRAG) is a group of willing Africana People coming
                    together voluntarily to deliver original thinking through
                    in-depth study, research, and analyses that benefit Africana
                    people worldwide...”
                  </p>
                </blockquote>
                <figcaption class="mt-6 text-sm leading-6 text-gray-300">
                  <strong class="font-semibold text-white"
                    >General Ishola Wiliams,</strong
                  >
                  Founder at PANAFSTRAG
                </figcaption>
              </figure>
            </div>
          </div>
          <div>
            <div class="text-base leading-7 text-gray-700 lg:max-w-lg">
              <h1
                class="mt-2 text-2xl md:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                Our Challange
              </h1>
              <div class="max-w-xl">
                <p class="mt-6">
                  In the 21st century, Civil Society Movements in favour of
                  stability, safety and development face many challenges: not
                  only wars and arms proliferation climate change but also human
                  rights violations, discrimination, hate and ignorance,
                  emergencies, and abuse of the earth resources. Millions are
                  now mobilizing to oppose the process of globalization and
                  inequality, which breeds conflicts of all kinds. What is
                  needed is a globalization of safety and stability that promote
                  human values and sustainable solution for political and
                  socio-economic development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import community_objectives from "@/database/objectives.json";
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
      title: "About PANAFSTRAG",
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
