<template>
  <div>
    <FormHelper>
      <div slot="form-header">
        <h3>Form One - Contact Us</h3>
        <p>Fill in the form to contact us</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required>
        <label>Your Message: </label>
        <textarea></textarea>
      </div>

      <div slot="form-controls">
        <button @click="handleSubmit">Send</button>
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
      alert('Click Form One');
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
