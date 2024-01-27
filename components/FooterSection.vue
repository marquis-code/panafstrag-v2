<!-- <template>
  <footer class="bg-gray-100">
    <div class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
      <div class="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
        <a class="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
          href="#MainContent">
          <span class="sr-only">Back to top</span>

          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clip-rule="evenodd" />
          </svg>
        </a>
      </div>

      <div class="lg:flex lg:items-end lg:justify-between">
        <div>
          <div class="flex justify-center text-teal-600 lg:justify-start">
            <img src="@/assets/icons/logo.png" alt="" class="h-16 w-16 rounded-full" />
          </div>

          <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
            Pan-Africana Strategic and Policy Research Group (PANAFSTRAG) is a group of willing Africana People coming
            together voluntarily to deliver original thinking through in-depth study, research, and analyses that benefit
            Africana people worldwide.
          </p>
        </div>

        <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
          <li>
            <nuxt-link class="text-gray-700 transition hover:text-gray-700/75" to="/about-us">
              About
            </nuxt-link>
          </li>

          <li>
            <nuxt-link class="text-gray-700 transition hover:text-gray-700/75" to="/cells">
              Cells
            </nuxt-link>
          </li>

          <li>
            <a class="text-gray-700 transition hover:text-gray-700/75" to="/language-groups">
              Language Groups
            </a>
          </li>

          <li>
            <nuxt-link class="text-gray-700 transition hover:text-gray-700/75" to="/focus-area">
              Focus Areas
            </nuxt-link>
          </li>
        </ul>
      </div>

      <p class="mt-12 text-center text-sm text-gray-500 lg:text-right">
        Copyright &copy; 2022. All rights reserved.
      </p>
    </div>
  </footer>
</template> -->

<template>
  <!--
    Heads up! 👋

    Plugins:
      - @tailwindcss/forms
  -->

  <footer class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-md">
        <strong
          class="block text-center text-xl font-bold text-gray-900 sm:text-3xl"
        >
          Want us to email you with the latest blockbuster news?
        </strong>

        <form @submit.prevent="handleSubscription" class="mt-6">
          <div class="relative max-w-lg hidden lg:block">
            <label class="sr-only" for="email"> Email </label>

            <input
              v-model="form.email"
              class="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
              id="email"
              type="email"
              placeholder="Enter your email"
            />

            <button
              :disabled="loading"
              type="submit"
              :class="[loading ? 'cursor-not-allowed opacity-20' : '']"
              class="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              {{ loading ? "processing..." : "Subscribe" }}
            </button>
          </div>
          <div class="relative max-w-lg lg:hidden space-y-10">
            <label class="sr-only" for="email"> Email </label>

            <input
              v-model="form.email"
              class="w-full rounded-full border-gray-200 bg-gray-100 p-4 b-4 pe-32 text-sm font-medium"
              id="email"
              type="email"
              placeholder="Enter your email"
            />

            <button
              :disabled="loading"
              type="submit"
              :class="[loading ? 'cursor-not-allowed opacity-20' : '']"
              class="top-1/2 -translate-y-1/2 w-full  rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              {{ loading ? "processing..." : "Subscribe" }}
            </button>
          </div>
        </form>
      </div>

      <div class="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
        <div class="mx-auto max-w-sm lg:max-w-none">
          <p class="mt-4 text-center text-gray-500 lg:text-left lg:text-lg">
            Pan-Africana Strategic and Policy Research Group (PANAFSTRAG) is a
            group of willing Africana People coming together voluntarily to
            deliver original thinking through in-depth study, research, and
            analyses that benefit Africana people worldwide.
          </p>

          <div class="mt-6 flex justify-center gap-4 lg:justify-start">
            <a
              class="text-gray-700 transition hover:text-gray-700/75"
              href="https://web.facebook.com/panafstrag/"
              target="_blank"
              rel="noreferrer"
            >
              <span class="sr-only"> Facebook </span>

              <img
                src="@/assets/icons/facebook.svg"
                alt="facebook"
                class="h-14 w-14 p-2 border rounded-full border-gray-900"
              />
            </a>

            <a
              class="text-gray-700 transition hover:text-gray-700/75"
              href="https://web.facebook.com/panafstrag/"
              target="_blank"
              rel="noreferrer"
            >
              <span class="sr-only"> LinkedIn </span>

              <img
                src="@/assets/icons/linkedin.svg"
                alt="linkedin"
                class="h-14 w-14 p-2 border rounded-full border-gray-900"
              />
            </a>
          </div>
        </div>

        <div
          class="grid grid-cols-1 gap-8 text-center lg:grid-cols-2 lg:text-left"
        >
          <div>
            <strong class="font-medium text-gray-900"> Quick Links </strong>

            <ul class="mt-6 space-y-1">
              <li>
                <nuxt-link
                  class="text-gray-700 transition hover:text-gray-700/75"
                  to="/programmes"
                >
                  Programmes</nuxt-link
                >
              </li>

              <li>
                <nuxt-link
                  class="text-gray-700 transition hover:text-gray-700/75"
                  to="/archived"
                >
                  Archives
                </nuxt-link>
              </li>

              <!-- <li>
                <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
                  App Development
                </a>
              </li>

              <li>
                <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
                  Web Development
                </a>
              </li> -->
            </ul>
          </div>

          <div>
            <strong class="font-medium text-gray-900"> About </strong>

            <ul class="mt-6 space-y-1">
              <li>
                <nuxt-link
                  class="text-gray-700 transition hover:text-gray-700/75"
                  to="/board-members"
                  >Board Members</nuxt-link
                >
              </li>

              <li>
                <nuxt-link
                  class="text-gray-700 transition hover:text-gray-700/75"
                  to="/orgamogram"
                >
                  Organogram
                </nuxt-link>
              </li>

              <li>
                <nuxt-link
                  class="text-gray-700 transition hover:text-gray-700/75"
                  to="/cells"
                >
                  Cell
                </nuxt-link>
              </li>

              <li>
                <nuxt-link
                  class="text-gray-700 transition hover:text-gray-700/75"
                  to="/about-us"
                >
                  Objectives
                </nuxt-link>
              </li>
            </ul>
          </div>

          <!-- <div>
            <strong class="font-medium text-gray-900"> Support </strong>

            <ul class="mt-6 space-y-1">
              <li>
                <a class="text-gray-700 transition hover:text-gray-700/75" href="/"> FAQs </a>
              </li>

              <li>
                <a class="text-gray-700 transition hover:text-gray-700/75" href="/"> Contact </a>
              </li>

              <li>
                <a class="text-gray-700 transition hover:text-gray-700/75" href="/"> Live Chat </a>
              </li>
            </ul>
          </div> -->
        </div>
      </div>

      <!-- <div class="mt-16 border-t border-gray-100 pt-8">
        <p class="text-center text-xs/relaxed text-gray-500">
          © Company 2022. All rights reserved.

          <br />

          Created with
          <a href="" class="text-gray-700 underline transition hover:text-gray-700/75">Laravel</a>
          and
          <a href="" class="text-gray-700 underline transition hover:text-gray-700/75">Laravel Livewire</a>.
        </p>
      </div> -->
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      loading: false,
      form: {
        email: "",
      },
    };
  },
  methods: {
    resetForm() {
      this.form.email = "";
    },
    async handleSubscription() {
      this.loading = true;
      try {
        let payload = {
          email: this.form.email,
        };
        await this.$axios
          .post("https://panafstrag.onrender.com/api/admin/subscribe", payload)
          .then(() => {
            this.$toast.success("Subscription was successful").goAway(1500);
            this.resetForm();
            this.loading = false;
          });
      } catch (error) {
        this.$toast.error(error.response.data.errorMessage).goAway(1500);
        this.loading = false;
      }
    },
  },
};
</script>

<style></style>
