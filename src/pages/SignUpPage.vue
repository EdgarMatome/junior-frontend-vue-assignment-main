<template>
  <div class="signup-container">
    <div class="signup-box">
      <h2>Create An Account</h2>
      <p>Create an account to enjoy all the services without any ads for free!</p>
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
      <p class="signin-link">Already Have An Account? <a href="#">Sign In</a></p>
    </div>
  </div>
</template>


<script>
import BaseInput from '/src/components/base-input/BaseInput.vue';
import BaseButton from '/src/components/base-button/BaseButton.vue';

export default {
  components: {
    BaseInput,
    BaseButton
  },
  data() {
    return {
      email: '',
      password: '',
      emailError: '',
      passwordError: ''
    };
  },
  methods: {
    createAccount() {
      this.emailError = '';
      this.passwordError = '';

      if (!this.email) {
        this.emailError = 'Email is required.';
      }
      if (!this.password) {
        this.passwordError = 'Password is required.';
      }

      if (!this.emailError && !this.passwordError) {
        console.log('Email:', this.email);
        console.log('Password:', this.password);
      }
    }
  }
};
</script>

<style scoped>
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--color-page-background);
}

.signup-box {
  background-color: var(--color-form-background);
  padding: 2rem;
  border-radius: var(--border-radius-l);
  box-shadow: 0 4px 6px var(--color-box-shadow);
  text-align: center;
}

.signup-box h2 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: var(--color-heading);
}

.signup-box p {
  margin-bottom: 1.5rem;
  color: var(--color-paragraph)
}

.signup-box form {
  display: flex;
  flex-direction: column;
}

.signup-box input {
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1.53px solid var(--color-border);
  border-radius: var(--border-radius-m);
}

.signin-link {
  margin-top: 1rem;
}

.signin-link a {
  color: var(--color-primary-dark);
  text-decoration: none;
}

.signin-link a:hover {
  text-decoration: underline;
}
</style>
