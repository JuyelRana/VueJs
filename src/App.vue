<template>
  <div>
    <FormHelper>
      <div slot="form-header">
        <h3>This is the title of the form</h3>
        <p>Information about the form</p>
      </div>

      <div slot="form-fields">
        <input type="text" placeholder="name" required>
        <input type="password" placeholder="password" required>
      </div>

      <div slot="form-controls">
        <button @click="handleSubmit">Submit</button>
      </div>

    </FormHelper>

  </div>
</template>

<script>

import FormHelper from './components/FormHelper';

export default {
  components:{
    'FormHelper': FormHelper
  },
  data(){
    return {
      title:'I am a dynamic title..'
    }
  },
  methods:{

  }
}
</script>

<style>

</style>
