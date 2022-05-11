<template>
  <VForm class='login-form' @submit.prevent='handleSubmit'>
    <VMainTitle class='login-form__title'>Логин</VMainTitle>
    <VInput
        name='email'
        v-model.trim='dataForm.email'
        autocomplete='username'
        :is-error='$v.dataForm.email.$error'
        placeholder='Email'
        class='login-form__input login-form__input--email'
    />
    <VInput
        name='password'
        v-model.trim='dataForm.password'
        type='password'
        autocomplete='current-password'
        :is-error='$v.dataForm.password.$error'
        placeholder='Password'
        class='login-form__input login-form__input--password'
    />
    <VButton type='submit' :loading='submitStatus === "LOADING"'>
      Log In
    </VButton>
  </VForm>
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators';
import {mapActions} from "vuex";
import VForm from '@/components/shared/form/VForm';
import VInput from '@/components/shared/VInput';
import VButton from '@/components/VButton';
import VMainTitle from '@/components/VMainTitle';

export default {
  name: 'LoginForm',
  components: {VMainTitle, VForm, VButton, VInput},
  data() {
    return {
       dataForm: {
         email:'',
         password:''
       },
      errorForm: {
         isError: false,
         errorMessage: 'NOT VALID',
      },
      submitStatus: null
    }
  },
  validations: {
    dataForm: {
      email: {required, email},
      password: {required, minLength: minLength(4)}
    },
  },
  methods: {
    ...mapActions('auth', ['login']),
    async handleSubmit() {
      this.submitStatus = 'LOADING'
      this.$v.$touch()
      if(this.$v.$invalid) {
        this.submitStatus = 'ERROR';
        return;
      }else {
        try {
          this.submitStatus = 'PENDING'
          await this.login(this.dataForm);
          // await this.$store.dispatch('auth/login', this.dataForm)
          this.submitStatus = 'OK'
          this.$router.push({name: 'homepage'})
        } catch (error) {
          this.submitStatus = 'ERROR'
          this.$notify({
            type: 'error',
            title: 'ERROR',
            text: error.message,
          })
        }
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    &__title {
      margin-bottom: 30px;
      text-align: center;
    }
    &__input--email {
      margin-bottom: 20px;
    }

    &__input--password {
      margin-bottom: 60px;
    }
}
</style>



<!--<template>-->
<!--  <VForm ref='form' @submit.prevent="handleSubmit">-->
<!--    <VInput-->
<!--        name="email"-->
<!--        v-model="dataForm.email"-->
<!--        autocomplete="username"-->
<!--    <VInput-->
<!--        name="password"-->
<!--        v-model="dataForm.password"-->
<!--        type="password"-->
<!--        autocomplete="current-password"-->
<!--        :rules="passRules"/>-->
<!--    <VButton type="submit">-->
<!--      Log In-->
<!--    </VButton>-->
<!--  </VForm>-->
<!--</template>-->

<!--<script>-->
<!--import VForm from "@/components/shared/form/VForm";-->
<!--import VInput from "@/components/shared/VInput";-->
<!--import VButton from "@/components/VButton";-->

<!--export default {-->
<!--  name: "LoginForm",-->
<!--  components: {VForm, VButton, VInput},-->
<!--  data() {-->
<!--    return {-->
<!--      dataForm: {-->
<!--        email: "",-->
<!--        password: ""-->
<!--      }-->
<!--    }-->
<!--  },-->

<!--  methods: {-->
<!--    handleSubmit() {-->
<!--      console.log("Submit")-->
<!--    },-->
<!--    mounted() {-->
<!--      console.log(this.$refs.form)-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style lang="scss" scoped>-->

<!--</style>-->