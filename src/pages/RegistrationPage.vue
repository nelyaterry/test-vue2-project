<template>
  <main class="registration">
    <AuthSection>
      <AuthFormContainer>
        <RegistrationForm/>
      </AuthFormContainer>
    </AuthSection>
  </main>
</template>

<script>
import AuthSection from "@/components/auth/authSection";
import AuthFormContainer from "@/components/auth/authFormContainer";
import RegistrationForm from "@/components/auth/registration/RegistrationForm";
export default {
  name: "RegistrationPage",
  components: {RegistrationForm, AuthFormContainer, AuthSection}
}
</script>

<style scoped>

</style>