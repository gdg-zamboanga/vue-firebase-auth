<template>
  <div>
    <h1>DASHBOARD of <br>{{email}}</h1>
    <button @click="logout">Log Out</button>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'app',
  data () {
    return {
      email: '',
      error: ''
    }
  },
  beforeMount(){
    let user = firebase.auth().currentUser
    this.email = user.email
  },
  methods: {
    logout(){
      firebase.auth().signOut().then(() => {
        console.log('Successfully logged out')
        this.$router.push('/login')
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
