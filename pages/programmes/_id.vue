<template>
  <main>
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto space-y-20 lg:space-y-0 lg:flex flex-wrap">
          <div
            class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          >
            <div
              v-if="
                !programme?.uploadedVideoUrl ||
                programme?.uploadedVideoUrl == null ||
                programme?.uploadedVideoUrl == 'null'
              "
              class="h-[500px] w-[500px] flex justify-center items-center rounded-md bg-gray-100"
            >
              <div class="flex justify-center items-center flex-col">
                <img
                  src="@/assets/icons/sad.svg"
                  alt=""
                  class="h-14 w-14 rounded-full border border-gray-700 p-1"
                />
                <p class="font-medium text-gray-500">No video uploaded</p>
              </div>
            </div>
            <div v-else>
              <div v-if="!is_facebook_video">
                <div>
                  <iframe
                    title="programeVideo"
                    class="hidden lg:block"
                    width="600"
                    height="600"
                    :src="`https://www.youtube.com/embed/${videoId}`"
                  ></iframe>
                </div>
                <div>
                  <iframe
                    class="lg:hidden"
                    title="programeVideo"
                    style="border-style: none; width: 100%; height: 300px"
                    :src="`https://www.youtube.com/embed/${videoId}`"
                  ></iframe>
                </div>
              </div>
              <div
                v-else
                class="h-[500px] w-[500px] flex justify-center items-center rounded-md bg-gray-100"
              >
                <div
                  class="flex justify-center items-center flex-col cursor-pointer"
                >
                  <a
                    :href="programme.uploadedVideoUrl"
                    target="_blank"
                    class="flex justify-center items-center flex-col gap-y-3"
                  >
                    <img
                      src="@/assets/icons/facebook-green.svg"
                      alt=""
                      class="h-14 w-14 rounded-full border border-gray-700 p-1"
                    />
                    <p class="font-medium text-gray-500">
                      Click to watch on facebook
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flow-root">
            <dl class="-my-3 divide-y divide-gray-100 text-sm">
              <div
                class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
              >
                <dt class="font-medium text-gray-900">Title</dt>
                <dd class="text-gray-700 sm:col-span-2">
                  {{ programme?.title ?? "N/A" }}
                </dd>
              </div>

              <div
                class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
              >
                <dt class="font-medium text-gray-900">Theme</dt>
                <dd class="text-gray-700 sm:col-span-2">
                  {{ programme?.theme ?? "N/A" }}
                </dd>
              </div>

              <div
                class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
              >
                <dt class="font-medium text-gray-900">Start Date</dt>
                <dd class="text-gray-700 sm:col-span-2">
                  {{ programme?.startDate ?? "N/A" }}
                </dd>
              </div>

              <div
                class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
              >
                <dt class="font-medium text-gray-900">End Date</dt>
                <dd class="text-gray-700 sm:col-span-2">
                  {{ programme?.endDate ?? "N/A" }}
                </dd>
              </div>

              <div
                class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
              >
                <dt class="font-medium text-gray-900">Status</dt>
                <dd class="text-gray-700 sm:col-span-2">
                  {{ programme?.status }}
                </dd>
              </div>

              <div
                class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
              >
                <dt class="font-medium text-gray-900">Programe Files</dt>
                <dd class="text-gray-700 sm:col-span-2">
                  <a
                    :href="eachFile"
                    class=""
                    v-for="(
                      eachFile, index
                    ) in programme?.uploadedDocumentFiles"
                    :key="index"
                    download
                  >
                    <img
                      src="@/assets/icons/pdfIcon.svg"
                      class="h-14 w-14"
                      alt=""
                    />
                  </a>
                </dd>
              </div>

              <div
                class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
              >
                <dt class="font-medium text-gray-900">Created At</dt>
                <dd class="text-gray-700 sm:col-span-2">
                  {{ programme?.createdAt }}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <!--
        <div class="">
          <div
            class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          >
            <div
              v-if="
                !programme?.uploadedVideoUrl ||
                programme?.uploadedVideoUrl == null ||
                programme?.uploadedVideoUrl == 'null'
              "
              class="h-[500px] w-[500px] flex justify-center items-center rounded-md bg-gray-100"
            >
              <div class="flex justify-center items-center flex-col">
                <img
                  src="@/assets/icons/sad.svg"
                  alt=""
                  class="h-14 w-14 rounded-full border border-gray-700 p-1"
                />
                <p class="font-medium text-gray-500">No video uploaded</p>
              </div>
            </div>
            <div v-else>
              <div v-if="!is_facebook_video" class="w-full border-2 border-red-500">
                <iframe
                  title="programeVideo"
                  style="border-style: none;width: 100%; height: 300px;"
                  :src="`https://www.youtube.com/embed/${videoId}`"
                ></iframe>
              </div>
              <div
                v-else
                class="h-[500px] w-[500px] flex justify-center items-center rounded-md bg-gray-100"
              >
                <div
                  class="flex justify-center items-center flex-col cursor-pointer"
                >
                  <a
                    :href="programme.uploadedVideoUrl"
                    target="_blank"
                    class="flex justify-center items-center flex-col gap-y-3"
                  >
                    <img
                      src="@/assets/icons/facebook-green.svg"
                      alt=""
                      class="h-14 w-14 rounded-full border border-gray-700 p-1"
                    />
                    <p class="font-medium text-gray-500">
                      Click to watch on facebook
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flow-root">
            <dl class="-my-3 divide-y divide-gray-100 text-sm">
              <div
                class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
              >
                <dt class="font-medium text-gray-900">Title</dt>
                <dd class="text-gray-700 sm:col-span-2">
                  {{ programme?.title ?? "N/A" }}
                </dd>
              </div>

              <div
                class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
              >
                <dt class="font-medium text-gray-900">Theme</dt>
                <dd class="text-gray-700 sm:col-span-2">
                  {{ programme?.theme ?? "N/A" }}
                </dd>
              </div>

              <div
                class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
              >
                <dt class="font-medium text-gray-900">Start Date</dt>
                <dd class="text-gray-700 sm:col-span-2">
                  {{ programme?.startDate ?? "N/A" }}
                </dd>
              </div>

              <div
                class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
              >
                <dt class="font-medium text-gray-900">End Date</dt>
                <dd class="text-gray-700 sm:col-span-2">
                  {{ programme?.endDate ?? "N/A" }}
                </dd>
              </div>

              <div
                class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
              >
                <dt class="font-medium text-gray-900">Status</dt>
                <dd class="text-gray-700 sm:col-span-2">
                  {{ programme?.status }}
                </dd>
              </div>

              <div
                class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
              >
                <dt class="font-medium text-gray-900">Programe Files</dt>
                <dd class="text-gray-700 sm:col-span-2">
                  <a
                    :href="eachFile"
                    class=""
                    v-for="(
                      eachFile, index
                    ) in programme?.uploadedDocumentFiles"
                    :key="index"
                    download
                  >
                    <img
                      src="@/assets/icons/pdfIcon.svg"
                      class="h-14 w-14"
                      alt=""
                    />
                  </a>
                </dd>
              </div>

              <div
                class="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
              >
                <dt class="font-medium text-gray-900">Created At</dt>
                <dd class="text-gray-700 sm:col-span-2">
                  {{ programme?.createdAt }}
                </dd>
              </div>
            </dl>
          </div>
        </div> -->
      </div>
    </section>
  </main>
</template>

<script>
import community_programmes from "@/database/programmes.json";
export default {
  scrollToTop: true,
  data() {
    return {
      showNested: false,
      programmes: community_programmes,
      programme: {},
    };
  },
  head() {
    return {
      title: this.programme?.title,
      meta: [
        {
          hid: `description`,
          name: "description",
          content: `${this.programme?.theme}`,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: `${this.programme?.title}`,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: `${this.programme?.title}`,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: `${this.programme?.title}`,
        },
        {
          hid: "twitter:image:alt",
          name: "twitter:image:alt",
          content: `${this.programme?.title}`,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: `${this.programme?.title}`,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: `${this.programme?.title}`,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `${this.programme?.title}`,
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: `${this.programme?.title}`,
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: `${this.programme?.title}`,
        },
      ],
    };
  },
  mounted() {
    this.fetchProgramme();
  },
  methods: {
    exportToPDF() {
      html2pdf(document.getElementById("element-to-convert"));
    },
    async fetchProgramme() {
      const id = this.$route.params.id;
      this.programme = this.programmes.find((program) => program._id === id);
    },
    goBack() {
      this.$router.go(-1);
    },
    copyText(item) {
      window.navigator.clipboard
        .writeText(item)
        .then(() => {
          this.$toastr.s("Youtube Url Copied!", "Success");
        })
        .catch(() => {
          alert("somethig went wrong while copying text");
        });
    },
  },
  computed: {
    timeFrame() {
      let startDay = this.$moment(this.programme.startDate)
        .format("YYYY-MM-Do")
        .split("-")[2];
      let endDay = this.$moment(this.programme.endDate)
        .format("YYYY-MM-Do")
        .split("-")[2];
      let month = this.$moment(this.programme.endDate)
        .format("YYYY-MMMM-Do")
        .split("-")[1];
      let year = this.$moment(this.programme.startDate)
        .format("YYYY-MM-DD")
        .split("-")[0];
      return `${startDay} to ${endDay}, ${month}, ${year}`;
    },
    formattedStartDate() {
      return new Date(this.programme?.startDate).toDateString();
    },
    formattedEndDate() {
      return new Date(this.programme?.endDate).toDateString();
    },
    videoId() {
      return this.programme?.uploadedVideoUrl?.split("=")[1];
    },
    is_facebook_video() {
      return this.programme?.uploadedVideoUrl?.includes("fb") ? true : false;
    },
  },
};
</script>

<style scoped>
#app {
  margin-top: 60px;
}

.fade-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.fade-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.fade-leave-to {
  transform: scale(0.8);
}
</style>
