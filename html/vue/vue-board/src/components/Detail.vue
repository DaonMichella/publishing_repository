<template>
  <div class="wrap">
    <ul>
      <li>{{data.writer}}</li>
      <li>{{data.title}}</li>
      <li>{{data.content}}</li>
    </ul>
    <button type="button" @click="updateData">수정</button>
    <button type="button" @click="deleteData">삭제</button>
  </div>
</template>

<script>
import data from '@/data';
export default {
  name: 'Detail',
  data () {
    const index = this.$route.params.contentId
    return {
      data : data[index],
      index : index
    }
  },
  methods : {
    updateData () {
      this.$router.push ({
        name : 'Create',
        params : {
          contentId : this.index
        }
      })
    },
    deleteData () {
      data.splice(this.index,1)
      this.$router.push({
        path : "/"
      })
    }
  }
}
</script>
<style>
  ul,li {list-style:none;}
</style>