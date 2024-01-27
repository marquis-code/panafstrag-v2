<template>
  <section class="text-gray-600 body-font">
    <section
      class="overflow-hidden bg-[url('~/assets/images/archived.jpeg')] bg-cover bg-top bg-no-repeat">
      <div class="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
        <div class="text-center ltr:sm:text-left rtl:sm:text-right">
          <div class="flex flex-wrap w-full mb-20 justify-center items-center flex-col">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0 flex justify-center items-center flex-col gap-y-3">
              <h1 class="sm:text-3xl text-3xl font-medium title-font mb-2 text-white">LANGUAGE GROUPS</h1>
              <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container px-6 py-24 mx-auto">
      <!-- <div class="flex flex-col text-center w-full mb-20">
        <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">LANGUAGE GROUPS</h2>
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">PANAFSTRAG Lanaguage Groups</h1>
      </div> -->
      <div class="flex flex-wrap -m-4">
        <div class="p-4 md:w-1/3" v-for="(itm, idx) in languageGroups" :key="idx">
          <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
            <div class="flex items-center mb-3">
              <div
                class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 class="text-gray-900 text-lg title-font font-medium">{{ itm.title }}</h2>
            </div>
            <div class="flex-grow">
              <p class="leading-relaxed text-base">{{ itm.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="space-y-6 py-6">
        <div>
          <p class="mt-4 text-gray-600">
            <span class="font-bold">PANAFSTRAG Language Groups</span> brings together Africana people whose
            countries have that language as one of the official languages or
            as mother tongue. It is open to all Africana people who are ready
            as volunteers to offer actionable thoughts and ideas and also work
            well in one of the PANAFSTRAG Cells with a team to activate these
            ideas successfully.
          </p>
        </div>

        <div>
          <h3 class="text-2xl font-medium pt-4">FUNCTION</h3>
          <p class="text-gray-600 pb-6">
            The Group provides a platform for easy production of knowledge and ideas
            without language obstacles.
          </p>
          <p class="text-gray-600 py-3">
            The Group is to provide a common linguistic, Ourstory (good and bad)
            economic, social and cultural platform for Africana people in all
            official languages of the Africana countries. The Groups are the linkage
            and enabler of collaboration through these languages with the official
            languages and the international political groupings; e.g:
          </p>
        </div>
        <div>

          <h3 class="text-2xl font-medium pt-6">MEMBERSHIP</h3>
          <p class="text-gray-600 py-2">
            The Co-Leaders of each Group will forward nominees with C.Vs as members
            to the Board for ratification or rejection.
          </p>
          <p class="text-gray-600">
            Other members with Language skills cannot be members as there is an
            opportunity to work together in the Cells.
          </p>
        </div>

        <div>
          <h3 class="text-2xl font-medium pt-4">LEADERSHIP</h3>
          <p class="text-gray-600 py-2">
            Co-Leaders (1man & 1 woman) appointed from the Board with one from the
            Continent and the other from the 6th Region.
          </p>
          <p class="text-gray-600">
            Co-Leaders will represent each Group on the Board; who is preferably
            bilingual to include English
          </p>
        </div>

        <div>
          <h3 class="text-2xl font-medium pt-4">FEES</h3>
          <p class="text-gray-600">
            No fees are payable but donations in any form for projects and
            activities of the Cells are encouraged, Language Groups will organize
            activities through the Cells except for Group Meetings or external
            activities in that language.
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- <section class="container px-5 py-24 mx-auto">
      <button @click="goBack()" class="
          outline-none
          my-3
          border
          bg-gray-200
          text-black
          px-3
          py-2
          rounded-md
          text-sm
        ">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#747070"
          stroke-width="2" stroke-linecap="square" stroke-linejoin="bevel">
          <path d="M19 12H6M12 5l-7 7 7 7" />
        </svg>
      </button>
      <div class="mt-6">
        <h2 class="text-2xl font-bold sm:text-3xl">
          PANAFSTRAG Language groups.
        </h2>

        <p class="mt-4 text-gray-600">
          PANAFSTRAG Language Groups brings together Africana people whose
          countries have that language as one of the official languages or
          as mother tongue. It is open to all Africana people who are ready
          as volunteers to offer actionable thoughts and ideas and also work
          well in one of the PANAFSTRAG Cells with a team to activate these
          ideas successfully.
        </p>
      </div>

      <h3 class="text-2xl font-medium pt-4">FUNCTION</h3>
      <p class="text-gray-600 pb-6">
        The Group provides a platform for easy production of knowledge and ideas
        without language obstacles.
      </p>
      <p class="text-gray-600 py-3">
        The Group is to provide a common linguistic, Ourstory (good and bad)
        economic, social and cultural platform for Africana people in all
        official languages of the Africana countries. The Groups are the linkage
        and enabler of collaboration through these languages with the official
        languages and the international political groupings; e.g:
      </p>
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-3">
        <div v-for="(itm, idx) in languageGroups" :key="idx" class="
            relative
            block
            overflow-hidden
            rounded-xl
            bg-[url(https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80)]
            bg-cover bg-center bg-no-repeat
          ">
          <span class="
              absolute
              right-4
              top-4
              z-10
              inline-flex
              items-center
              rounded-full
              bg-black
              px-3
              py-1
              text-xs
              font-semibold
              text-white
            ">

            <svg xmlns="http://www.w3.org/2000/svg" class="ml-1.5 h-4 w-4 text-green-500" viewBox="0 0 20 20"
              fill="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </span>

          <div class="relative bg-black bg-opacity-40 p-8 pt-40 text-white">
            <h3 class="text-2xl font-bold">{{itm.title}}</h3>

            <p class="text-sm">{{itm.description}}</p>
          </div>
        </div>
      </section>

      <h3 class="text-2xl font-medium pt-6">MEMBERSHIP</h3>
      <p class="text-gray-600 py-2">
        The Co-Leaders of each Group will forward nominees with C.Vs as members
        to the Board for ratification or rejection.
      </p>
      <p class="text-gray-600">
        Other members with Language skills cannot be members as there is an
        opportunity to work together in the Cells.
      </p>

      <h3 class="text-2xl font-medium pt-4">LEADERSHIP</h3>
      <p class="text-gray-600 py-2">
        Co-Leaders (1man & 1 woman) appointed from the Board with one from the
        Continent and the other from the 6th Region.
      </p>
      <p class="text-gray-600">
        Co-Leaders will represent each Group on the Board; who is preferably
        bilingual to include English
      </p>

      <h3 class="text-2xl font-medium pt-4">FEES</h3>
      <p class="text-gray-600">
        No fees are payable but donations in any form for projects and
        activities of the Cells are encouraged, Language Groups will organize
        activities through the Cells except for Group Meetings or external
        activities in that language.
      </p>
    </section> -->
</template>

<script>
export default {
  name: "language-groups",
  scrollToTop: true,
  data() {
    return {
      title: "Pan Africa language groups",
      languageGroups: [
        {
          title: 'Afro-Anglophone',
          description: 'Anglophone and Caricom to the Commonwealth',
          url: ''
        },
        {
          title: 'Afro-Francophone',
          description: 'Francophone to the Francophone Organization',
          url: ''
        },
        {
          title: 'Afro-Lusophone',
          description: 'Lusophone to the Lusophone community',
          url: ''
        },
        {
          title: 'Afro-Dutch',
          description: 'Dutch to the Dutch Community',
          url: ''
        },
        {
          title: 'Afro-Hispanish',
          description: 'Spanish to the Spanish Community',
          url: ''
        },
        {
          title: 'Afro-Arab',
          description: 'Arab to the Arab Institutions and Organizations.',
          url: ''
        }
      ],
      description:
        "Pan Africa; Original thinking, research help add to human knowledge",
      image:
        "https://res.cloudinary.com/marquis/image/upload/v1668940037/enagoshtazxadezqqjrj.png",
    };
  },
  head() {
    return {
      title: 'Language Groups',
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
};
</script>

<style scoped>
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
