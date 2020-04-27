<template>
  <div>
    <h1>Home Page</h1>

    <v-btn rounded class="indigo white--text">click me </v-btn>
    <v-btn outlined color="pink">Click Me</v-btn>

    <v-btn raised color="indigo white--text">Click Me</v-btn>

    <v-btn block color="pink">Click Me</v-btn>

    <v-btn depressed class="pink white--text">
      <v-icon left>mdi-email</v-icon>
      <span>Email Me</span>
    </v-btn>

    <v-btn depressed small class="pink white--text">
      <v-icon left small>mdi-email</v-icon>
      <span>Email Me</span>
    </v-btn>

    <v-btn depressed large class="pink white--text">
      <span>Email Me</span>
      <v-icon right large>mdi-email</v-icon>
    </v-btn>

    <v-btn fab depressed small dark color="purple">
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <div class="text-center">
      <v-btn class="mx-2" fab dark small color="primary">
        <v-icon dark>mdi-minus</v-icon>
      </v-btn>

      <v-btn class="mx-2" fab dark small color="pink">
        <v-icon dark>mdi-heart</v-icon>
      </v-btn>

      <v-btn class="mx-2" fab dark color="indigo">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>

      <v-btn class="mx-2" fab dark color="teal">
        <v-icon dark>mdi-format-list-bulleted-square</v-icon>
      </v-btn>

      <v-btn class="mx-2" fab dark large color="cyan">
        <v-icon dark>mdi-pencil</v-icon>
      </v-btn>

      <v-btn class="mx-2" fab dark large color="purple">
        <v-icon dark>mdi-pen</v-icon>
      </v-btn>
    </div>

    <v-card flat>
      <v-card-text>
        <v-container fluid class="pa-0">
          <v-row>
            <v-col cols="12">
              <p>Normal</p>
            </v-col>

            <v-col cols="12" sm="3">
              <v-btn icon color="pink">
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-col>

            <v-col cols="12" sm="3">
              <v-btn icon color="indigo">
                <v-icon>mdi-star</v-icon>
              </v-btn>
            </v-col>

            <v-col cols="12" sm="3">
              <v-btn icon color="green">
                <v-icon>mdi-cached</v-icon>
              </v-btn>
            </v-col>

            <v-col cols="12" sm="3">
              <v-btn icon color="deep-orange">
                <v-icon>mdi-thumb-up</v-icon>
              </v-btn>
            </v-col>
          </v-row>

          <v-row class="mt-12">
            <v-col cols="12">
              <p>Disabled</p>
            </v-col>

            <v-col cols="12" sm="3">
              <v-btn icon disabled>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-col>

            <v-col cols="12" sm="3">
              <v-btn icon disabled>
                <v-icon>mdi-star</v-icon>
              </v-btn>
            </v-col>

            <v-col cols="12" sm="3">
              <v-btn icon disabled>
                <v-icon>mdi-cached</v-icon>
              </v-btn>
            </v-col>

            <v-col cols="12" sm="3">
              <v-btn icon disabled>
                <v-icon>mdi-thumb-up</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
}
</script>
