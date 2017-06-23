<template>
  <div>
    <h1>SIGN UP</h1>
    <input type="email" v-model="email">
    <input type="password" v-model="password">
    <button @click="signup">SignUp</button>
    <router-link to="/"><button>Cancel</button></router-link>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signup(){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(user => {
        this.$router.push('/login')
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>

</style>
