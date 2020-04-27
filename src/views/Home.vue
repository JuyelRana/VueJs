<template>
  <div>
    <h1>Home Page</h1>
    <!-- <v-btn class="hidden-md-and-down">Click me</v-btn> -->
    <!-- <v-btn class="hidden-md-and-up">Click me</v-btn> -->
    <v-btn class="d-none d-sm-flex">Click me</v-btn>
    <v-btn class="d-sm-none d-md-flex">Only SM</v-btn>
    <v-btn class="d-md-none d-lg-flex">Only MD</v-btn>
    <v-btn class="d-none d-md-flex d-lg-none">Visible Only MD</v-btn>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
}
</script>
