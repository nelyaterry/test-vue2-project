<template>
  <main class="login">
    <AuthSection>
      <AuthFormContainer>
        <LoginForm/>
      </AuthFormContainer>
    </AuthSection>
  </main>
</template>

<script>
import AuthSection from "@/components/auth/authSection";
import LoginForm from "@/components/auth/login/LoginForm";
import AuthFormContainer from "@/components/auth/authFormContainer";
export default {
  name: "LoginPage",
  components: {AuthFormContainer, LoginForm, AuthSection}
}
</script>

<style lang="scss" scoped>

</style>