<template>
  <main>
    <Transition name="fade">
      <b-container>
        <section class="text-white">
          <div class="flex items-center justify-between my-3">
            <button
              @click="goBack()"
              class="outline-none border bg-gray-200 text-black px-3 py-1 rounded-md text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#747070"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="bevel"
              >
                <path d="M19 12H6M12 5l-7 7 7 7" />
              </svg>
            </button>
            <button
              @click="$router.push('/admin/programmes/create')"
              class="text-gray-400 rounded-md border bg-black text-white text-sm px-3 py-2"
            >
              Create Programme
            </button>
          </div>

          <div class="sm:flex-1 pb-0 mt-3">
            <label for="search" class="sr-only">Search</label>

            <input
              type="text"
              placeholder="Search.."
              v-model="search"
              class="w-full rounded-tr-md rounded-tl-md outline-none bg-white p-3 text-gray-700 transition border focus:border-white focus:outline-none focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <b-card class="mt-3">
            <b-table
              striped
              show-empty
              responsive
              :items="filteredProgrammes"
              :fields="fields"
              :busy="loading"
              :current-page="currentPage"
              :per-page="perPage"
              @row-clicked="viewProgramme"
            >
              <template #table-busy>
                <div class="text-center my-2 cursor-pointer">
                  <b-spinner class="align-middle"></b-spinner>
                  <small>Loading...</small>
                </div>
              </template>

              <template #empty>
                <p
                  class="text-center text-sm text-secondary py-2 cursor-pointer"
                >
                  {{
                    search
                      ? `No programmes found for search value: "${search}"`
                      : "No programmes available"
                  }}
                </p>
              </template>

              <template #cell(sn)="data">
                <span class="font-medium py-2 text-sm cursor-pointer">
                  {{ data.index + 1 }}</span
                >
              </template>

              <template #cell(title)="data">
                <span class="font-medium py-2 text-sm cursor-pointer">
                  {{
                    data?.item?.title === "null"
                      ? "N/A"
                      : data.item.title && data.item.title.length > 20
                      ? data.item.title.slice(0, 20) + "..."
                      : data.item.title
                  }}
                </span>
              </template>

              <template #cell(theme)="data">
                <span class="font-medium py-2 text-sm cursor-pointer">
                  {{
                    data?.item?.theme === "null"
                      ? "N/A"
                      : data.item.theme && data.item.theme.length > 20
                      ? data.item.theme.slice(0, 20) + "..."
                      : data.item.theme
                  }}</span
                >
              </template>

              <template #cell(video_upload)="data">
                <span class="font-medium py-2 text-sm">
                  {{ data?.item?.uploadedVideoUrl ? "YES" : "NO" }}</span
                >
              </template>

              <template #cell(file_uploads)="data">
                <span class="font-medium py-2 text-sm cursor-pointer">
                  {{
                    data?.item?.uploadedDocumentFiles
                      ? `${data?.item?.uploadedDocumentFiles.length} ${
                          data?.item?.uploadedDocumentFiles.length > 1
                            ? "files"
                            : "file"
                        } uploaded`
                      : "NO"
                  }}</span
                >
              </template>

              <template #cell(zoom_url)="data">
                <a
                  :href="`zoom ${data?.item?.zoomMeetingUrl}`"
                  class="font-medium py-2 text-sm"
                >
                  {{ data?.item?.zoomMeetingUrl }}</a
                >
              </template>

              <template #cell(status)="data">
                <span class="font-medium py-2 text-sm">{{
                  data?.item?.status ?? "N/A"
                }}</span>
              </template>

              <template #cell(start_date)="data">
                <span class="font-medium py-2 text-sm">{{
                  $moment(data.item.endDate).format("L")
                }}</span>
              </template>

              <template #cell(end_date)="data">
                <span class="font-medium py-2 text-sm">{{
                  $moment(data.item.endDate).format("L")
                }}</span>
              </template>

              <template #cell(actions)="data">
                <b-dropdown
                  size="sm"
                  variant="link"
                  class="position-relative text-center w-100"
                  :toggle-class="'text-decoration-none'"
                  :disabled="downloading"
                  :no-caret="true"
                  right
                >
                  <template #button-content>
                    <div class="flex justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle>
                      </svg>
                    </div>
                  </template>
                  <b-dropdown-item @click="handleEdit(data.item._id)">
                    <div class="flex items-center space-x-2">
                      <p>
                        <svg
                          class="cursor-pointer"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#74d321"
                          stroke-width="2"
                          stroke-linecap="square"
                          stroke-linejoin="bevel"
                        >
                          <path
                            d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"
                          ></path>
                          <polygon
                            points="18 2 22 6 12 16 8 16 8 12 18 2"
                          ></polygon>
                        </svg>
                      </p>

                      <p class="text-sm">Edit programme</p>
                    </div>
                  </b-dropdown-item>
                  <b-dropdown-item @click="handleDelete(data.item._id)">
                    <div class="flex items-center space-x-2">
                      <p>
                        <svg
                          class="cursor-pointer"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#d33a21"
                          stroke-width="2"
                          stroke-linecap="square"
                          stroke-linejoin="bevel"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path
                            d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                          ></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                      </p>
                      <p class="text-sm">Delete programme</p>
                    </div>
                  </b-dropdown-item>
                </b-dropdown>
              </template>
            </b-table>

            <div class="flex justify-end items-end">
              <b-pagination
                v-model="currentPage"
                :total-rows="totalRows"
                :per-page="perPage"
                size="md"
                class="my-3"
              ></b-pagination>
            </div>
          </b-card>
          <!-- </div> -->
        </section>
      </b-container>
    </Transition>

    <b-modal
      no-close-on-backdrop
      no-close-on-esc
      no-stacking
      hide-footer
      id="programmeModal"
    >
      <template #modal-title> <h1>Programme Details:</h1> </template>

      <div v-if="programmeData.title">
        <label class="font-medium text-sm">Programme Title:</label>
        <h4 class="font-medium">
          {{ programmeData.title }}
        </h4>
      </div>

      <div class="mt-4" v-if="programmeData.theme !== 'null'">
        <label class="font-medium text-sm">Programme Theme:</label>
        <p class="text-sm">
          {{ programmeData.theme }}
        </p>
      </div>

      <div class="mt-4" v-if="programmeData.startDate">
        <label class="font-medium text-sm">Programme Start Date:</label>
        <p class="text-sm">
          {{ programmeData.startDate }}
        </p>
      </div>

      <div class="mt-4" v-if="programmeData.endDate">
        <label class="font-medium text-sm">Programme End Date:</label>
        <p class="text-sm">
          {{ programmeData.endDate }}
        </p>
      </div>

      <div class="mt-4" v-if="programmeData.uploadedVideoUrl">
        <label class="font-medium text-sm">Uploaded recordings:</label>
        <p class="text-sm">
          {{ programmeData.uploadedVideoUrl ? "YES" : "NO" }}
        </p>
      </div>

      <div class="mt-4" v-if="programmeData.endDate">
        <label class="font-medium text-sm">Uploaded Files:</label>
        <p class="text-sm">
          {{
            programmeData.uploadedDocumentFiles
              ? `${programmeData.uploadedDocumentFiles.length} ${
                  programmeData.uploadedDocumentFiles.length > 1
                    ? "files"
                    : "file"
                } uploaded`
              : "NO"
          }}
        </p>
      </div>

      <div class="mt-4" v-if="programmeData.status">
        <label class="font-medium text-sm">Programme Status:</label>
        <p
          class="text-sm"
          :class="
            programmeData.status === 'completed'
              ? 'text-green-500'
              : programmeData.status === 'pending'
              ? 'text-yellow-500'
              : programmeData.status === 'active'
              ? 'text-orange-500'
              : ''
          "
        >
          {{ programmeData.status }}
        </p>
      </div>

      <div class="mt-4" v-if="programmeData.zoomMeetingUrl">
        <label class="font-medium text-sm">Zoom Url</label>
        <p class="text-sm">
          {{ programmeData.zoomMeetingUrl }}
        </p>
      </div>

      <div class="flex justify-end items-center">
        <button
          @click="$bvModal.hide('programmeModal')"
          class="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
        >
          <span
            class="absolute inset-0 border border-red-600 group-active:border-red-500 rounded-full"
          ></span>
          <span
            class="block border border-red-600 bg-red-600 rounded-full px-12 py-2 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
          >
            Close
          </span>
        </button>
      </div>
    </b-modal>
  </main>
</template>


<script>
import Swal from "sweetalert2/dist/sweetalert2.js";
// import "sweetalert2/src/sweetalert2.scss";
export default {
  name: "objective",
  scrollToTop: true,
  layout: "admin",
  data() {
    return {
      fields: [
        {
          key: "sn",
          label: "S/N",
          class: "font-medium text-gray-400 text-sm",
        },
        {
          key: "title",
          label: "Title",
          class: "font-medium text-gray-400 text-sm",
        },
        {
          key: "theme",
          label: "Theme",
          class: "font-medium text-gray-400 text-sm",
        },
        {
          key: "video_upload",
          label: "Video Upload",
          class: "font-medium text-gray-400 text-sm",
        },
        {
          key: "file_uploads",
          label: "File Uploads",
          class: "font-medium text-gray-400 text-sm",
        },
        {
          key: "zoom_url",
          label: "Zoom Link",
          class: "font-medium text-gray-400 text-sm",
        },
        {
          key: "status",
          label: "Status",
          class: "font-medium text-gray-400 text-sm",
        },
        {
          key: "start_date",
          label: "Start Date",
          class: "font-medium text-gray-400 text-sm",
        },
        {
          key: "end_date",
          label: "End Date",
          class: "font-medium text-gray-400 text-sm",
        },
        {
          key: "actions",
          label: "Actions",
          class: "font-medium text-end text-gray-400",
        },
      ],
      programmes: [],
      currentPage: 1,
      perPage: 7,
      search: "",
      showModal: false,
      totalRows: 1,
      loading: true,
      isDeleting: false,
      programmeData: {},
      title: "Pan Africa Board Members",
      description:
        "Pan Africa; Original thinking, research help add to human knowledge",
      image:
        "https://res.cloudinary.com/marquis/image/upload/v1668940037/enagoshtazxadezqqjrj.png",
    };
  },
  head() {
    return {
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
  created() {
    this.fetchProgrammes();
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.programmes.length;
  },
  methods: {
    viewProgramme(value) {
      this.programmeData = value;
      this.$bvModal.show("programmeModal");
    },
    async fetchProgrammes() {
      this.loading = true;
      try {
        this.loading = true;
        let res = await this.$axios.get(
          "https://panafstrag.onrender.com/api/panAfrica/programmes"
        );
        this.programmes = res.data;
        this.totalRows = res.data.length;
      } catch (error) {
        this.$toast
          .error("Something went wrong, please try again.")
          .goAway(1500);
      } finally {
        this.loading = false;
      }
    },

    goBack() {
      this.$router.go(-1);
    },
    handleDelete(id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.value) {
          this.triggerDeletion(id);
        } else {
          this.$swal("Cancelled", "Your file is still intact", "info");
        }
      });
    },

    async triggerDeletion(id) {
      try {
        await this.$axios.delete(
          `https://panafstrag.onrender.com/api/panAfrica/programmes/${id}`
        );
        this.$toast.success("Programme has been removed").goAway(1500);
        await this.fetchProgrammes();
      } catch (error) {
        this.$toast.error(error.response.data.errorMessage).goAway(1500);
      }
    },
    handleEdit(id) {
      this.$router.push(`/admin/programmes/${id}`);
    },
  },
  computed: {
    filteredProgrammes() {
      return this.programmes.filter((program) => {
        let search = this.search?.toLowerCase?.();
        return (
          program?.description?.toLowerCase?.().includes(search) ||
          program?.title?.toLowerCase?.().includes(search) ||
          program?.theme?.toLowerCase?.().includes(search)
        );
      });
    },
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
