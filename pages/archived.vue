<template>
  <section class="text-gray-600 body-font overflow-hidden">
    <section
      class="overflow-hidden bg-[url('~/assets/images/archived.jpeg')] bg-cover bg-top bg-no-repeat">
      <div class="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="text-center ltr:sm:text-left rtl:sm:text-right">
          <div class="flex flex-wrap w-full mb-20 justify-center items-center flex-col">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0 flex justify-center items-center flex-col gap-y-3">
              <h1 class="sm:text-3xl text-3xl font-medium title-font mb-2 text-white">PANAFSTRAG Programmes</h1>
              <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-12">
        <ArchivedProgrammes v-for="program in archivedProgrammes" :key="program._id" :program="program" />
      </div>
    </div>
  </section>
</template>

<script>
import ArchivedProgrammes from '@/components/Programmes/Archived.vue'
import community_programmes from '@/database/programmes.json'
import _ from "lodash";
export default {
  name: "programme",
  scrollToTop: true,
  components: {
    ArchivedProgrammes
  },
  data() {
    return {
      isOpen: true,
      programmes: community_programmes,
      starting_date: null,
      ending_date: null,
      title: "Pan Africa Archives",
      description:
        "Pan Africa; Original thinking, research help add to human knowledge",
      image:
        "https://res.cloudinary.com/marquis/image/upload/v1668940037/enagoshtazxadezqqjrj.png",
    };
  },
  head() {
    return {
      title: 'PANAFSTRAG Archives',
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
    toggle() {
      this.isOpen = !this.isOpen;
    },
    goBack() {
      this.$router.go(-1);
    },

    timeFrame(program) {
      let startDay = this.$moment(program.startDate)
        .format("YYYY-MM-Do")
        .split("-")[2];
      let endDay = this.$moment(program.endDate)
        .format("YYYY-MM-Do")
        .split("-")[2];
      let year = this.$moment(program.endDate)
        .format("YYYY-MM-DD")
        .split("-")[0];
      return `${startDay} to ${endDay}, ${year}`;
    },
  },
  computed: {
    archivedProgrammes() {
      return this.programmes.filter((p) => {
        this.starting_date = p.startDate;
        this.ending_date = p.endDate;
        let endDate = this.$moment(p.endDate)
          .format("YYYY-MM-DD")
          .split("-")[0];
        let currentDate = this.$moment(new Date())
          .format("YYYY-MM-DD")
          .split("-")[0];
        return Number(currentDate) - Number(endDate) >= 2;
      });
    },
  },
};
</script>
