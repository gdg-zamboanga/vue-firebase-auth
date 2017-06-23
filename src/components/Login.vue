<template>
  <div>
    <h1>LOGIN</h1>
    <input type="email" v-model = "email">
    <input type="password" v-model = "password">
    <button @click="login">Login</button>
    <router-link to="/signup"><button>SignUp</button></router-link>
    <p>{{error}}</p>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    login(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(user => {
        if(user){
          this.$router.push('/dashboard')
        } else {
          this.$router.push('/')
        }
      }).catch(err => {
        this.error = "User not found"
      })
    }
  }
}
</script>

<style>

</style>
