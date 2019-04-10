<template>
    <div class="contactUs">
      <div class="backgroundImg"></div>
        <h1 class="questionH1">Send us a question!</h1>
        <form class="sendForm">
          <p class="email">Email:</p><input class="emailInput"/>
          <p class="firstName">Name:</p><input class="nameInput"/>
          <p class="lastName">Lastname:</p><input class="lastNameInput">
          <p class="questions">Question:</p><textarea class="questionsArea"/>
        </form>
        <button class="sendQuestion">Send Question!</button>
                
    </div>
</template>

<script>
//styles
import contactUsStyles from './styles/contactUsStyles.css';


export default {
  name: 'contactUs',
  props: {

  }
}
</script>


