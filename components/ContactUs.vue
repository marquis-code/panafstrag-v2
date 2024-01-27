<template>
  <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div
        class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0"
          marginwidth="0" scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe>
        <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
          <div class="lg:w-1/2 px-6">
            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
            <p class="mt-1">302, Iju Road; Iju-Ishaga bus stop, Lagos, Nigeria.</p>
          </div>
          <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
            <a href="mailto:panafstraginternational@gmail.com"
              class="text-indigo-500 leading-relaxed text-sm">panafstraginternational@gmail.com</a>
            <a href="mailto:isholawilliams@gmail.com"
              class="text-indigo-500 leading-relaxed text-sm">isholawilliams@gmail.com</a>
            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
            <p> <a href="https://wa.me/2348055177436" class="leading-relaxed">+234-8055177436</a></p>
            <p> <a href="https://wa.me/2348056210960" class="leading-relaxed">+234-8056210960</a></p>
          </div>
          <div class="lg:w-1/2 px-6 lg:mt-0 space-y-3">
            <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">SOCIALS</h2>
            <div class="flex items-center gap-x-2">
              <p> <a href="https://www.linkedin.com/in/panafstrag/" class="leading-relaxed">
                <img
                    src="@/assets/icons/facebook.svg" alt="facebook"
                    class="h-14 w-14 p-2 border rounded-full border-gray-900" /></a></p>
              <p> <a href="https://web.facebook.com/panafstrag/" class="leading-relaxed">
                <img
                    src="@/assets/icons/linkedin.svg" alt="linkedin"
                    class="h-14 w-14 p-2 border rounded-full border-gray-900" /></a></p>
            </div>
          </div>
        </div>
      </div>
      <form @submit.prevent="handleFeedback"
        class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
        <p class="leading-relaxed mb-5 text-gray-600">Enter your feedback in the form below. We would like to know what
          you think about PANAFSTRAG.</p>
        <div class="relative mb-4">
          <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
          <input v-model="form.name" type="text" id="name" name="name"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
          <input v-model="form.email" type="email" id="email" name="email"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
          <textarea v-model="form.message" id="message" name="message"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <button :disabled="!isFormEmpty" :class="[!isFormEmpty ? 'cursor-not-allowed opacity-25' : '']"
          class="text-white border-0 py-3 px-6 focus:outline-none bg-black rounded text-lg">Submit</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  computed: {
    isFormEmpty() {
      return !!(this.form.name && this.form.email && this.form.message)
    }
  },
  methods: {
    handleFeedback() {

    }
  }
}
</script>

<style></style>
