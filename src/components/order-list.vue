<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="chooseMine"
    v-loading="loading"
    element-loading-text="拼了老命在加载">
    <el-table-column
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      prop="userName"
      label="姓名">
    </el-table-column>
    <el-table-column
      label="主食">
      <template slot-scope="scope">
        {{typeName(scope.row.type)}}
      </template>
    </el-table-column>
    <el-table-column
      prop="count"
      label="数量">
    </el-table-column>
    <el-table-column
      label="时间">
      <template slot-scope="scope">
        {{scope.row.createdAt | timeFilter}}
      </template>
    </el-table-column>
    <el-table-column
      prop="others"
      label="备注">
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button
          v-if="scope.row.userName === myName || loginStatus"
          @click.native.prevent="$emit('delete', scope.row.objectId)"
          type="text"
          size="small">
          撤销
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'OrderList',

  props: {
    // 历史数据
    tableData: {
      type: Array,
      required: true
    },
    loading: Boolean,
    // 可选菜单
    typeOptions: {
      type: Array,
      required: true
    },
    myName: String
  },

  methods: {

    // 对我的点餐进行背景高亮
    chooseMine ({row}) {
      if (row.userName === this.myName) {
        return 'positive-row'
      } else {
        return ''
      }
    },

    // 主食名称
    typeName (type) {
      const option = this.typeOptions.find(item => item.value === type)
      return option && option.name
    }
  },

  filters: {
    timeFilter (date) {
      return date.slice(-8)
    }
  }
}
</script>

<style lang="less">
  .el-table .positive-row {
    background: #e2f0e4;
  }
</style>
