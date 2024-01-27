<template>
  <main>
    <hero-section />
    <intro-section />
    <our-objectives />
    <team-section />
    <event-section />
    <contact-us />
    <!-- <section class="lg:flex justify-between items-center">
      <div class="lg:w-6/12 pt-6 lg:pt-20 h-[300px]  bg-pink-600 text-white space-y-3 lg:px-20 px-10">
        <p class="font-serif">Subscribe</p>
        <h1 class="text-xl font-medium">Newsletter</h1>
        <p>Signup for our monthly newsletter to get the latest news, volunteer opportunities</p>
        <div class="md:flex space-y-3 items-center lg:gap-x-3 gap-x-2">
          <div class="lg:w-1/2 w-full">
            <input type="email" placeholder="Enter your email address" class="rounded-full w-full px-6 py-3" />
          </div>
          <button class="bg-gray-700 text-white rounded-full px-10 py-2.5">Send</button>
        </div>
      </div>
      <div
        class="relative lg:w-6/12 h-[300px] pt-20 lg:px-20 px-10 bg-pink-600 text-white space-y-3 bg-[url('@/assets/images/hero2.jpg')] bg-cover bg-top bg-no-repeat">
        <div class="absolute bg-blue-600/30 backdrop-brightness-75 h-full w-full inset-0">
        </div>
        <h1 class="text-2xl font-medium">Recent Blog</h1>
        <p class="z-10">Take a look at recent blog posts</p>
        <div class="absolute z-10">
          <button class="bg-gray-700 text-white rounded-full px-3 py-2.5">See our blogs</button>
        </div>
      </div>
    </section> -->
  </main>
</template>

<script>
import TeamSection from '@/components/BoardMembers/TeamSection.vue'
import OurObjectives from '@/components/Objectives/ObjectivesList.vue'
import EventSection from '@/components/Events/HeroEventSection.vue'
export default {
  head: {
    title: 'Home page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'PANAFSTRAG Official website'
      }
    ],
  },
  components: {
    TeamSection,
    OurObjectives,
    EventSection
  }
}
</script>
