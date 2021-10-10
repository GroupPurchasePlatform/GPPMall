<template>
  <div class="search-container">
    <form action="/">
      <van-search
        input-align="center"
        placeholder="请输入搜索关键词"
        shape="round"
        background="#3296fa"
        v-model="value"
        show-action
        @search="onSearch"
        @cancel="$router.back()"
      />
    </form>
    <!-- TODO: 搜索联想 -->
    <!-- TODO: 搜索历史 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    // TODO: 搜索功能实现
    onSearch(val) {
      
    }
  }
}
</script>

<style scoped lang="less">
.search-container {
  .van-search__action {
    color: #fff;
  }
}
</style>
