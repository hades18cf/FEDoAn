<template>
  <div class="overplay"></div>
  <div class="loading-progress">
    <svg
      viewBox="0 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      :stroke="color"
      class="loader"
    >
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(1 1)" stroke-width="2">
          <circle stroke-opacity=".25" cx="18" cy="18" r="18" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="0.8s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
    <div v-if="progress !== ''" style="color: blue">
      {{ progress }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Loading",
  props: {
    id: {
      type: String,
      default: "default",
    },
    progress: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      color: "#2d5cb9",
      height: 64,
      width: 64,
    };
  },
  computed: {
    ...mapState({
      isPreviewInCreatingApp: (state) => state.isPreviewInCreatingApp,
    }),
  },
  watch: {
    progress: {
      handler(val) {
        if (
          val !== "" &&
          ((this.id === "default" && !this.isPreviewInCreatingApp) ||
            (this.id === "preview" && this.isPreviewInCreatingApp))
        ) {
          console.log("progress: " + val);
        }
      },
    },
  },
};
</script>
<style scoped>
.overplay {
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(26, 25, 25, 0.1);
  z-index: 100;
  cursor: pointer;
}
.loading-progress {
  display: auto;
  position: absolute;
  top: calc(50% - 32px);
  left: calc(50% - 32px);
  z-index: 200;
  cursor: pointer;
  text-align: center;
}
.loader {
  margin: auto;
}
</style>
