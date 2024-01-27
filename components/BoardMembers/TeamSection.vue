<template>
  <section class="py-6 sm:py-12 bg-gray-800 text-gray-100">
    <div class="container p-6 mx-auto space-y-8">
      <div class="space-y-2 text-center">
        <h2 class="text-3xl font-bold font-mono">Our Members</h2>
        <p class="font-serif text-sm text-gray-400">Meet Our Members</p>
      </div>
      <div class="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
        <Member class="w-full" v-for="(item, idx) in boardMembers" :key="idx" :member="item" />
      </div>
      <div class="flex justify-center items-center mt-10"> <nuxt-link to="/board-members"
          class="bg-black no-underline px-6 py-2.5 rounded-full">View All
          Members</nuxt-link></div>
    </div>
  </section>
</template>

<script>
import Member from '@/components/BoardMembers/Member.vue'
import team_members from '@/database/board-members.json'
export default {
  components: {
    Member
  },
  data() {
    return {
      boardMembers: team_members.splice(0, 4)
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
}
</script>
