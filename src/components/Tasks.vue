<template>
  <div>
    <button class="button logout" v-on:click="logout">Logout</button>
    <article class="covers" v-for="(task, idx) in tasks" :key="idx">
      <div>
        <img style="margin: 10px" :src="task.image" height="291px" width="192px">
        <p >{{ task.name }}</p>
        <hr>
        <button class="button" @click="deleteTask(task.id)">
          Delete
        </button>
      </div>
    </article>

    <form @submit="addTask(name, image)">
      <h2>Add a New Task Cover</h2>
      <input v-model="name" placeholder="Task Name" class="input" required>
      <input v-model="image" placeholder="Task Image URL" class="input" required>
      <button type="submit" class="button">Add New Task</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'
import { db } from '../main'

export default {
  name: 'Tasks',
  data () {
    return {
      tasks: [],
      name: '',
      image: ''
    }
  },
  firestore () {
    return {
      tasks: db.collection('tasks').orderBy('createdAt')
    }
  },
  methods: {
    addTask (name, image) {
      const createdAt = new Date()
      db.collection('tasks').add({ name, image, createdAt })
      // Clear values
      this.name = ''
      this.image = ''
    },
    deleteTask (id) {
      db.collection('tasks').doc(id).delete()
    },
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
}
</script>

<style scoped>
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
  color: black;
}
input, button {
  margin-bottom: 10px;
}
button {
  background-color: #0476F2;
}
.logout {
  left: 50%;
  top: 100%;
}
</style>
