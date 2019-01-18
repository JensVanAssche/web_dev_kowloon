<template>
  <b-row class="newsletter">
      <b-col cols="7">
            <h1 class="mb-4 text-center">discover amazing<br />
            Kowloon deals!
            </h1>
            <h4>only in our newsletter</h4>
        </b-col>
        <b-col cols="5">
            <h2>Subscribe to our newsletter</h2>
            <p>Lorum ipsum dolor sit amet.</p>
            <form>
            <input type="text" class="button" placeholder="name@domain.com" v-model="email">
            <input type="button" value="OK" class="greybutton" @click="saveEmail">
            </form>
        </b-col>
  </b-row>
</template>

<script>
import Firebase from 'firebase';

var db = Firebase.initializeApp({
  apiKey: "AIzaSyDyvtxr4z2BmOee1goy6H1WAz_mRw4HgtQ",
  authDomain: "kowloon-opdracht-vue.firebaseapp.com",
  databaseURL: "https://kowloon-opdracht-vue.firebaseio.com",
  projectId: "kowloon-opdracht-vue",
  storageBucket: "kowloon-opdracht-vue.appspot.com",
  messagingSenderId: "666990527999"
}).database();

export default {
    name: 'newsletter',
    data: function() {
    return {
      email: ""
    }
  },
  methods: {
    saveEmail () {
      db.ref('emails').push(this.email)
    }
  }
}
</script>
