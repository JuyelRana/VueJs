<template>
  <div>
    <FormHelper>
      <div slot="form-header">
        <h3>Form Two - Log In</h3>
        <p>Enter your details to log-in</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="username" required />
        <input type="password" placeholder="password" required />
      </div>
      <div slot="form-controls">
        <button @click="handleSubmit">Login</button>
      </div>
    </FormHelper>
  </div>
</template>

<script>

import FormHelper from './FormHelper';

export default {
  components:{
    'FormHelper':FormHelper
  },
  data(){
    return {

    }
  },
  methods:{
    handleSubmit(){
      alert('Click Form Two');
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body{
  margin: 0;
  font-family: 'Nunito SemiBold';
}

</style>
