<template>
  <main class="bg-gray-50">
    <section class="text-white container lg:w-9/12 mx-auto pb-16">
      <div class="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div class="flex justify-center items-center flex-col pb-10">
          <h2 class="text-3xl font-bold sm:text-4xl text-gray-800">What we do</h2>

          <p class="mt-4 text-gray-800 text-center">
            Outlined below are our goals at PANAFSTRAG
          </p>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <Objective v-for="(item, idx) in objectives" :key="idx" :objective="item" />
        </div>
      </div>
      <div class="flex justify-center items-center mt-10"> <nuxt-link to="/about-us"
          class="bg-black no-underline px-6 py-2.5 rounded-full">View All
          Objectives</nuxt-link></div>
    </section>
  </main>
</template>

<script>
import Objective from '@/components/Objectives/EachObjective.vue'
export default {
  components: {
    Objective
  },
  data() {
    return {
      objectives: [
        'To provide an in-depth study and analysis of the problems of political and social stability, security and public safety and socio-development in Africa and its diaspora, propose policy options for their solutions and the implementation strategies.',
        'To provide a forum for the discussion and exchange of ideas, knowledge, expertise and experience through seminars, workshops, conferences, roundtables and study groups of African and Afro-descendant Scholars, security Experts, Policymakers and Implementors.',
        'To publish books, monographs, occasional papers, newsletters and such other publications that will support the aims and objectives of PANAFSTRAG, inform Policymakers and enlighten the general public', 'To create a platform for bonding between Africans and Afro-descendants in sharing best practices in community security, social issues, economic development, and entrepreneurship with respect to small medium scale enterprises.',
        'To collaborate and partner through its Reps with international, continental, and regional organisations such as UN, AU, industries, and specialised Agencies with interests in Africa and diaspora.', 'To promote through research and advocacy, policies for conflict prevention and innovation in institutional reforms of political and economic governance at all level for the benefits of Africans and Afro-descendants Communities.',
        'To provide research facilities for visiting scholars and practitioners from different parts of the world in order to enhance mutual understanding of global strategic issues.',
        'To bridge the gap between Africans and Africans in the 6th Region on human security issues and development.', 'To set up a database on strategic issues to facilitate research and provide an Assessment of the security climate for development activities in Africa.',
        'To identify, collect, collate and disseminate information, and to raise public awareness of the Continent\'s strategic and security issues within Africa and the Diaspora.']
    }
  }
}
</script>
