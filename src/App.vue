<template>
  <div id="app" class="container">
    <div id="content">
    <h3>{{this.title_one}}</h3>
    <h4>{{this.title_two}}</h4>
    <h1>{{this.name}}</h1>
    <h5>{{this.content}}</h5>
    <router-link to="/home">
      <a-button type="primary">私という人間</a-button>
    </router-link>
    <router-view />

    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      title_one : 'Birthday Award',
      title_two : 'This award is presented to',
      name : 'SOE YU',
      content : "FOR SUCCESSFULLY COMPLETING ANOTHER YEAR OF LIFE, FULL OF IT'S UPS AND DOWNS, GOOD TIMES AND BAD, WHILE REMAINING AMAZINGLY COOL AND CLASSY"
    }
  }
}
</script>

<style>
  .container{
    background: black;
    height: 1020px;
    width: 100%;
  }
  #content{
    text-align: center;
    padding-top: 60px;
    font-weight: bold;
  }
  #content h3{
    color: white;
  }
  #content h4{
    color: white;
    margin-top: 40px;
  }
  #content h1{
    color: yellow;
    margin-top: 40px;
  }
  #content h5{
    margin-top: 60px;
    color: white;
    line-height: 40px;
  }
</style>