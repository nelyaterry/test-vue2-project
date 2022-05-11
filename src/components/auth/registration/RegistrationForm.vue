<template>
  <VForm ref='form' class='registration-form' @submit.prevent='handleSubmit'>
    <VMainTitle class='registration-form__title'>Регистрация</VMainTitle>
    <VInput
        name='name'
        v-model='dataForm.name'
        :is-error='$v.dataForm.name.$error'
        placeholder='Name'
        class='registration-form__input registration-form__input--name'
    />
    <VInput
        name='email'
        v-model.trim='dataForm.email'
        autocomplete='username'
        :is-error='$v.dataForm.email.$error'
        placeholder='Email'
        class='registration-form__input registration-form__input--email'
    />
    <VInput
        name='password'
        v-model.trim='dataForm.password'
        type='password'
        autocomplete='current-password'
        :is-error='$v.dataForm.password.$error'
        placeholder='Password'
        class='registration-form__input registration-form__input--password'
    />
    <VButton type='submit' :loading='submitStatus === "LOADING"'>
      Log Up
    </VButton>
  </VForm>
</template>

<script>
import {required, email, minLength } from 'vuelidate/lib/validators';
import { mapActions } from 'vuex'
import VForm from '@/components/shared/form/VForm';
import VMainTitle from '@/components/VMainTitle';
import VInput from '@/components/shared/VInput';
import VButton from '@/components/VButton';
// import {registerUser} from '@/services/auth.service';
export default {
  name: 'RegistrationForm',
  components: {VButton, VInput, VMainTitle, VForm},
  data(){
    return{
      dataForm: {
        name:'',
        email:'',
        password:'',

      },
      submitStatus: null,
    }
  },
  validations: {
    dataForm: {
      name: {required},
      email: {required, email},
      password: {required, minLength: minLength(4)}
    }
  },
  methods: {
    ...mapActions('auth', ['registerUser']),
    async handleSubmit() {
      this.submitStatus = 'LOADING'
      this.$v.$touch();
      if(this.$v.$invalid) {
        this.submitStatus = 'ERROR';
        return;
      } else {
        try {
          this.submitStatus = 'PENDING';
          // const {data} = await registerUser(this.dataForm);
          // const {user, token} = data;
          // this.$store.commit('setUser', user);
          // this.$store.commit('setToken', token)
          await this.registerUser(this.dataForm)
          // await this.$store.dispatch('auth/registerUser', this.dataForm)
          this.submitStatus = 'OK'
          this.$router.push({name: 'homepage'})
          // this.$refs.form.reset();
        } catch (error) {
          this.submitStatus = 'ERROR'
          this.$notify({
            type: 'error',
            title: 'ERROR',
            text: error.message,
          })
          // this.$refs.form.reset()
          // this.$router.push({ name: 'homepage' });
        }
      }
    }
  },
}
</script>

<style lang='scss' scoped>
  .registration-form {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    &__title {
      margin-bottom: 30px;
      text-align: center;
    }
    &__input--name, &__input--email {
      margin-bottom: 20px;
    }

    &__input--password {
      margin-bottom: 60px;
    }
  }
</style>