<template>
  <div class="bg-white py-24 sm:py-32">
    <div
      class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3"
    >
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Meet our leadership
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          We’re a dynamic group of individuals who are passionate about what we
          do.
        </p>
      </div>
      <ul
        role="list"
        class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
      >
        <li v-for="(item, idx) in boardMembers" :key="idx">
          <div class="flex items-center gap-x-6">
            <img class="h-16 w-16 rounded-full" :src="item.avatar" alt="" />
            <div>
              <h3
                class="text-base font-semibold leading-7 tracking-tight text-gray-900"
              >
                {{ item.name }}
              </h3>
              <nuxt-link
                :to="`/board-members/${item._id}`"
                class="text-sm font-semibold leading-6 text-indigo-600"
              >
                Read More
              </nuxt-link>
            </div>
          </div>
        </li>
        <div class="flex justify-center items-center">
          <nuxt-link
            to="/board-members"
            class="bg-black no-underline text-white px-6 py-2.5 rounded-full"
            >View All Members</nuxt-link
          >
        </div>
        <!-- More people... -->
      </ul>
    </div>
  </div>

  <!-- <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our team
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          We’re a dynamic group of individuals who are passionate about what we
          do and dedicated to delivering the best results for our clients.
        </p>
      </div>
      <ul
        role="list"
        class="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
      >
        <li v-for="(item, idx) in boardMembers" :key="idx">
          <img
            class="mx-auto h-24 w-24 rounded-full"
            :src="item.avatar"
            alt=""
          />
          <h3
            class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900"
          >
            {{ item.name }}
          </h3>
          <p class="text-sm font-semibold leading-6 text-indigo-600">
            Read more
          </p>
        </li>
      </ul>
    </div>
  </div> -->

  <!-- <div class="bg-white py-24 md:py-32 lg:py-40">
    <div
      class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3"
    >
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our team
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          We’re a dynamic group of individuals who are passionate about what we
          do and dedicated to delivering the best results for our clients.
        </p>
      </div>
      <ul
        role="list"
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
      >
        <li v-for="(item, idx) in boardMembers" :key="idx">
          <img
            class="aspect-[3/2] w-full rounded-2xl object-cover"
            :src="item.avatar"
            alt=""
          />
          <h3 class="mt-6 text-lg font-semibold leading-8 text-gray-900">
            {{ item.name }}
          </h3>
          <p class="text-base leading-7 text-gray-600">Senior Developer</p>
          <p class="mt-4 text-base leading-7 text-gray-600">
            {{
              item.bio.length > 100
                ? `${item.bio.slice(0, 100)}...`
                : item.bio
            }}
          </p>
          <ul role="list" class="mt-6 flex gap-x-6">
            <li>
              <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">X</span>
                <svg
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-400 hover:text-gray-500">
                <span class="sr-only">LinkedIn</span>
                <svg
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      boardMembers: null,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  async mounted() {
    try {
      const response = await this.$axios.get("/data/board-members.json");
      this.boardMembers = response.data.splice(0, 6);
    } catch (error) {
      console.error("Error fetching JSON data:", error);
    }
  },
};
</script>
