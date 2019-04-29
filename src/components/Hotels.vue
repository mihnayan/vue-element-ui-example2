<template>
  <el-table
      :data="searchByCost">
    <el-table-column
        label="Отель"
        prop="name"></el-table-column>
    <el-table-column
        label="Стоимость"
        prop="cost"></el-table-column>
    <el-table-column align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="Введите стоимость"/>
      </template>
      <template slot-scope="scope">
        <el-button v-if="!scope.row.selected"
          size="mini"
          type="danger"
          @click="handleSelect(scope.$index, scope.row)">Выбрать</el-button>
        <el-tag v-if="scope.row.selected"
            type="success"
            disable-transitions>Добавлен в избранное</el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  computed: {
    searchByCost () {
      return this.$store.state.hotels.filter(h => !this.search || h.cost >= this.search);
    }
  },
  methods: {
    handleSelect (index, row) {
      console.dir(row);
    }
  }
}
</script>
