<template>
  <div id="#example-1">
    <table class="summary-table">
      <tr v-for="(item, index) in  rows" :key="item.name">
        <template v-if="item['isVisible']">
          <td class="cursor-pointer" v-for="(col, prop) in item" :key="prop">
            <v-icon
              v-on:click="toggleRow(index)"
              class="m-r-5"
              v-if="prop === 'name'"
            >{{ getIcon(item) }}</v-icon>
            {{col}}
          </td>
        </template>
        <template v-else>
          <ReportGrid/>
        </template>
      </tr>
    </table>
  </div>
</template>

<script>
import { mdiMinusBoxOutline, mdiCheckboxBlankOutline } from "@mdi/js";
import ReportGrid from "./ReportGrid";

export default {
  components: {
    ReportGrid
  },
  computed: {},
  filters: {},
  props: {
    name: String
  },
  data: function() {
    return {
      icons: {
        mdiMinusBoxOutline,
        mdiCheckboxBlankOutline
      },
      isClicked: false,
      rows: [
        {
          name: "Jay",
          age: 25,
          isVisible: true
        },
        {
          name: "Jasy",
          age: 25,
          isVisible: false
        },
        {
          name: "Ak",
          age: 50,
          isVisible: true
        }
      ]
    };
  },
  methods: {
    toggleRow(ind) {
      this.rows[ind + 1]["isVisible"] = !this.rows[ind + 1]["isVisible"];
    },

    getIcon(item) {
      return item["isVisible"]
        ? this.icons.mdiCheckboxBlankOutline
        : this.icons.mdiMinusBoxOutline;
    }
  }
};
</script>

<style lang="scss">
.m-r-5 {
  margin-right: 5px;
}
$border: 1px solid #26a69a;
.summary-table {
  width: 100%;
  border-top: $border;
  border-right: $border;
  border-left: $border;
  th {
    font-weight: 400;
  }
  td {
    text-align: left;
  }
  th,
  td {
    border-bottom: $border;
    padding: 0.3rem;
    &:not(:last-child) {
      border-right: $border;
    }
  }
}
</style>
