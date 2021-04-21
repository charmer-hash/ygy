<template>
  <div>
    <v-snackbar
      :timeout="timeout"
      :color="color"
      v-model="visible"
      top
      :light="light"
    >
      <div class="content">
        <v-icon>{{ icon }}</v-icon>
        <span>
          {{ message }}
        </span>
      </div>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      message: '',
      color: '',
      timeout: 5000,
      icon: 'mdi-message-text',
      light: false,
    };
  },
  methods: {
    info(text, timeout = 5000) {
      this.color = '';
      this.visible = true;
      this.message = text;
      this.timeout = timeout;
      this.icon = 'mdi-message-text';
      this.light = true;
    },
    success(text, timeout = 5000) {
      this.color = '#81C784';
      this.visible = true;
      this.message = text;
      this.timeout = timeout;
      this.light = false;
      this.icon = 'mdi-checkbox-marked-circle';
    },
    error(text, timeout = 5000) {
      this.color = '#EF5350';
      this.visible = true;
      this.message = text;
      this.timeout = timeout;
      this.light = false;
      this.icon = 'mdi-close-circle';
    },
    warn(text, timeout = 5000) {
      this.color = '#FFEE58';
      this.visible = true;
      this.message = text;
      this.timeout = timeout;
      this.light = true;
      this.icon = 'mdi-alert-circle';
    },
  },
};
</script>

<style>
.content {
  display: flex;
  align-items: center;
}
.content > i {
  margin-right: 10px;
}
</style>
