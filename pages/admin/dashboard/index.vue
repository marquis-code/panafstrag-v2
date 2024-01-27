<template>
  <main class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
        <div class="relative block rounded-xl border border-gray-100 p-8 md:p-4 shadow-xl">
          <span
            class="absolute right-4 top-4 rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-base text-green-600">
            {{ membersLength ?? "0" }}
          </span>

          <div class="mt-4 text-gray-500 sm:pr-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24" fill="none"
              stroke="#747070" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="bevel">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>

            <h3 class="mt-4 text-xl font-medium text-gray-900">
              Board Members
            </h3>

            <p class="mt-2 hidden text-sm sm:block">
              Board members belonging to the association
            </p>
          </div>
        </div>

        <div class="relative block rounded-xl border border-gray-100 p-8 md:p-4 shadow-xl">
          <span
            class="absolute right-4 top-4 rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600 text-base">
            {{ objectivesLength ?? "0" }}
          </span>

          <div class="mt-4 text-gray-500 sm:pr-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24" fill="none"
              stroke="#747070" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="bevel">
              <path d="M3 3v18h18" />
              <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
            </svg>

            <h3 class="mt-4 text-xl font-medium text-gray-900">Objectives</h3>

            <p class="mt-2 hidden text-sm sm:block">
              Board members belonging to the association
            </p>
          </div>
        </div>

        <div class="relative block rounded-xl border border-gray-100 p-8 md:p-4 shadow-xl">
          <span
            class="absolute right-4 top-4 rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600 text-base">
            {{ programmesLength ?? "0" }}
          </span>

          <div class="mt-4 text-gray-500 sm:pr-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24" fill="none"
              stroke="#747070" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="bevel">
              <polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon>
              <line x1="3" y1="22" x2="21" y2="22"></line>
            </svg>
            <h3 class="mt-4 text-xl font-medium text-gray-900">Programmes</h3>

            <p class="mt-2 hidden text-sm sm:block">
              Board members belonging to the association
            </p>
          </div>
        </div>

        <div class="relative block rounded-xl border border-gray-100 p-8 md:p-4 shadow-xl">
          <span
            class="absolute right-4 top-4 rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600 text-base">
            {{ responsibilitiesLength ?? "0" }}
          </span>

          <div class="mt-4 text-gray-500 sm:pr-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24" fill="none"
              stroke="#747070" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="bevel">
              <path
                d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3">
              </path>
            </svg>

            <h3 class="mt-4 text-xl font-medium text-gray-900">
              Responsibilities
            </h3>

            <p class="mt-2 hidden text-sm sm:block">
              Board members belonging to the association
            </p>
          </div>
        </div>

        <div class="relative block rounded-xl border border-gray-100 p-8 md:p-4 shadow-xl">
          <span
            class="absolute right-4 top-4 rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600 text-base">
            {{ archivesLength ?? "0" }}
          </span>

          <div class="mt-4 text-gray-500 sm:pr-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24" fill="none"
              stroke="#747070" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="bevel">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>

            <h3 class="mt-4 text-xl font-medium text-gray-900">Archives</h3>

            <p class="mt-2 hidden text-sm sm:block">
              Board members belonging to the association
            </p>
          </div>
        </div>

        <div class="relative block rounded-xl border border-gray-100 p-8 md:p-4 shadow-xl">
          <span
            class="absolute right-4 top-4 rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600 text-base">
            {{
                        !membersLength ||
                        !objectivesLength ||
                        !archivesLength ||
                        !programmesLength ||
                        !responsibilitiesLength
                        ? "0"
                        : "6"
                        }}
          </span>

          <div class="mt-4 text-gray-500 sm:pr-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24" fill="none"
              stroke="#747070" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="bevel">
              <circle cx="12" cy="12" r="10" />
              <path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z" />
            </svg>

            <h3 class="mt-4 text-xl font-medium text-gray-900">Cells</h3>

            <p class="mt-2 hidden text-sm sm:block">
              Board members belonging to the association
            </p>
          </div>
        </div>
  </main>
</template>

<script>
import Swal from "sweetalert2/dist/sweetalert2.js";
// import "sweetalert2/src/sweetalert2.scss";
export default {
  name: "admin",
  layout: "admin",
  data() {
    return {
      membersLength: null,
      objectivesLength: null,
      programmesLength: null,
      responsibilitiesLength: null,
      archivesLength: null,
      openSidebar: false,
      userId: "",
    };
  },
  // created() {
  //   if (process.server) {
  //     return "";
  //   } else {
  //     this.userId = localStorage.getItem("userId");
  //   }
  //   console.log(this.userId);

  //   if (!this.userId) {
  //     this.$router.push("/login");
  //   }

  //   if (this.userId) {
  //     this.fetchStatistics();
  //   }

  //   if (process.server) {
  //     return "";
  //   } else {
  //     this.userId = localStorage.getItem("userId");
  //   }

  //   if (this.userId === null) {
  //     this.$router.push({ path: "/login" });
  //   } else {
  //     this.fetchStatistics();
  //   }
  // },
  methods: {
    async fetchStatistics() {
      try {
        await Promise.all([
          this.$axios.get(
            "https://panafstrag.onrender.com/api/panAfrica/board-member"
          ),
          this.$axios.get(
            "https://panafstrag.onrender.com/api/panAfrica/objective"
          ),
          this.$axios.get(
            "https://panafstrag.onrender.com/api/panAfrica/programmes"
          ),
          this.$axios.get(
            "https://panafstrag.onrender.com/api/panAfrica/responsibilities"
          ),
          this.$axios.get(
            "https://panafstrag.onrender.com/api/panAfrica/archives"
          ),
        ]).then((res) => {
          this.membersLength = res[0].data.length;
          this.objectivesLength = res[1].data.length;
          this.programmesLength = res[2].data.length;
          this.responsibilitiesLength = res[3].data.length;
          this.archivesLength = res[4].data.length;
        });
      } catch (error) {
        console.log(error);
      }
    },
    handleOpenSidebar() {
      this.openSidebar = !this.openSidebar;
    },
    handleLogout() {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, logout!",
      }).then((result) => {
        if (result.value) {
          this.Logout(id);
        } else {
          this.$swal("Cancelled", "You're still logged in!", "info");
        }
      });
    },
    async Logout() {
      localStorage.removeItem("userId");
      this.$swal("Logged Out!", "You have successfully logged out.", "success");
    },
  },
};
</script>

<style></style>
