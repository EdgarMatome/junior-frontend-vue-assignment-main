<template>
  <div class="signup-container">
    <div class="shape-top-left"></div>
    <div class="shape-bottom-right"></div>
    <div class="signup-box">
      <h1>Create An Account</h1>
      <p>
        Create an account to enjoy all the services <br />
        without any ads for free!
      </p>
      <form @submit.prevent="createAccount">
        <BaseInput
          type="email"
          v-model="email"
          placeholder="Email Address"
          required
          :error="emailError"
        />
        <BaseInput
          type="password"
          v-model="password"
          placeholder="Password"
          required
          :error="passwordError"
        />
        <BaseButton label="Create Account" type="submit" />
      </form>
      <p class="signin-link">
        Already Have An Account? <a href="/sign-in">Sign In</a>
      </p>
    </div>
    <BaseNotification
      ref="notification"
      :message="notificationMessage"
      :type="notificationType"
    />
  </div>
</template>

<script lang="ts">
import BaseInput from "../components/base-input/BaseInput.vue";
import BaseButton from "../components/base-button/BaseButton.vue";
import BaseNotification from "../components/base-notification/BaseNotification.vue";

export default {
  components: {
    BaseInput,
    BaseButton,
    BaseNotification,
  },
  data() {
    return {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
      notificationMessage: "",
      notificationType: "success",
    };
  },
  methods: {
    createAccount() {
      this.emailError = "";
      this.passwordError = "";

      if (!this.email) {
        this.emailError = "Email is required.";
      }
      if (!this.password) {
        this.passwordError = "Password is required.";
      }

      if (!this.emailError && !this.passwordError) {
        console.log("Email:", this.email);
        console.log("Password:", this.password);
        this.email = "";
        this.password = "";
        this.notificationMessage = "Account created successfully!";
        this.notificationType = "success";
        (
          this.$refs.notification as InstanceType<typeof BaseNotification>
        ).show();
      }
    },
  },
};
</script>

<style scoped>
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--color-page-background);
  position: relative;
  overflow: hidden;
}

.shape-top-left,
.shape-bottom-right {
  position: absolute;
  width: 350px;
  height: 350px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 89px;
  transform: rotate(45deg);
}

.shape-top-left {
  top: -110px;
  left: -85px;
}

.shape-bottom-right {
  bottom: -100px;
  right: -100px;
}

.signup-box {
  background-color: var(--color-form-background);
  padding: 2rem;
  border-radius: var(--border-radius-l);
  box-shadow: 0 4px 6px var(--color-box-shadow);
  text-align: center;
}

.signup-box h1 {
  margin-bottom: 1rem;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-h1);
  color: var(--color-heading);
}

.signup-box p {
  font-weight: var(--font-weight-small);
  line-height: 20px;
  font-size: var(--font-size-s);
  color: var(--color-paragraph);
}

.signup-box button {
  margin-top: 30px;
}

.signup-box form {
  display: flex;
  flex-direction: column;
}

.signin-link {
  margin-top: 1rem;
  line-height: 18px;
}

.signin-link a {
  color: var(--color-primary-dark);
  text-decoration: none;
}

.signin-link a:hover {
  text-decoration: underline;
}
</style>
