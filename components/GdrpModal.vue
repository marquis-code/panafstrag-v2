<template>
  <div
    v-if="showModal"
    class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
  >
    <div
      class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
    >
      <div class="mt-3 text-center">
        <div
          class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"
        >
          <img
            src="@/assets/images/GDPR.png"
            class="h-10 w-10 rounded-full"
            alt="GDPR ICON"
          />
        </div>
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          GDPR Compliance
        </h3>
        <div class="mt-2 px-2 py-3">
          <p class="text-sm text-gray-500">
            We use cookies to enhance your experience, analyze site traffic, and
            serve tailored ads. By clicking 'Accept', you consent to our use of
            cookies in accordance with our Privacy Policy.
          </p>
        </div>
        <div class="items-center px-4 py-3">
          <button
            id="acceptBtn"
            class="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-auto shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
            @click="handleAccept"
          >
            Accept
          </button>
          <button
            id="rejectBtn"
            class="px-4 py-2 ml-3 bg-red-500 text-white text-base font-medium rounded-md w-auto shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
            @click="handleReject"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
  mounted() {
    this.checkConsent();
  },
  methods: {
    checkConsent() {
      const consent = localStorage.getItem("gdprConsent");
      if (consent === null) {
        this.showModal = true;
      }
    },
    handleAccept() {
      localStorage.setItem("gdprConsent", "accepted");
      this.showModal = false;
    },
    handleReject() {
      localStorage.setItem("gdprConsent", "rejected");
      this.showModal = false;
    },
  },
};
</script>

<style>
/* Add your Tailwind CSS styles here */
</style>
