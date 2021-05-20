<template>
  <div class="wrap">
    <div class="tbl">
      <table>
        <caption></caption>
        <colgroup>
          <col style="width:33%">
          <col style="width:33%">
          <col style="width:33%">
        </colgroup>
        <thead>
          <tr>
            <th scope="col">내용1</th>
            <th scope="col">내용2</th>
            <th scope="col">내용3</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="index" v-for="(value,index) in data" @click="detail(index)">
            <td>{{value.writer}}</td>
            <td>{{value.title}}</td>
            <td>{{value.content}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <button type="button" @click="write">글쓰기</button>
  </div>
</template>

<script>
import data from '@/data';
export default {
  name: 'Read',
  data () {
    return {
      data : data
    }
  },
  methods : {
    write (){
      this.$router.push({
        path :'create'
      })
    },
    detail (index) {
      this.$router.push ({
        name : 'Detail',
        params : {
          contentId : index
        }
      })
       
    }
  }
}
</script>
