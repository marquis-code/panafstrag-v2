<template>
  <main>
    <updated-navigation-bar v-if="$route.name !== 'index'" />
    <!-- <NavigationBar /> -->
    <Nuxt />
    <!-- <footer-section /> -->
    <updated-footer-section />
    <!-- <CookieAlert @click="closeModal" :isOpen="isOpen" /> -->
    <GdprModal />
  </main>
</template>
<script>
import GdprModal from '@/components/GdrpModal.vue';
import CookieAlert from "@/components/CookieAlert.vue";
import UpdatedFooterSection from "@/components/UpdatedFooterSection.vue";
import UpdatedNavigationBar from '~/components/UpdatedNavigationBar.vue';
export default {
  components: {
    CookieAlert,
    UpdatedFooterSection,
    UpdatedNavigationBar,
    GdprModal
  },
  data() {
    return {
      isOpen: true,
    };
  },
  mounted() {
    console.log(process.browser, "here");
  },
  methods: {
    getGDPR() {
      if (process.browser) {
        return localStorage.getItem("GDPR:accepted", true);
      }
    },
    closeModal() {
      this.isOpen = false;
    },
  },
  created() {
    if (!this.getGDPR() === true) {
      this.isOpen = true;
    }
  }
};
</script>

<style>
body {
  font-family: "Montserrat", sans-serif;
}
</style>
