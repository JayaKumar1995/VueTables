<template>
  <div id="#example-1">
    <p>{{now}}</p>
    <p>hi</p>
    <p>{{now}}</p>
    <table>
      <tr v-for="item in rows" :key="item.name">
        <td v-for="(col,index) in item " :key="index"></td>
        {{index}}
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    now: function() {
      return Date.now();
    }
  },
  data: function() {
    return {
      rows: [
        {
          name: "Jay",
          age: 25
        },
        {
          name: "Ak",
          age: 50
        }
      ]
    };
  }
};
</script>
