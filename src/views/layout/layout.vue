<template>
  <div class="layout">
    <div class="layout_header">
      <span :style="isCollapse?'width:64px':''">
        后台管理系统
        <i @click="Collapse" class="el-icon-s-operation"></i>
      </span>

      <el-dropdown>
        <span class="el-dropdown-link">
          <i class="el-icon-setting"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="layout_conten">
      <div class="layout_aside">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#324157"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="isCollapse"
          router
        >
          <el-submenu index="../Home">
            <template slot="title">
              <i class="el-icon-picture-outline"></i>
              <span>首页</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="../Home">数据图表</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项2</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="../About">
            <i class="el-icon-menu"></i>
            <span slot="title">关于我们</span>
          </el-menu-item>
          <el-menu-item index="../tinymce">
            <i class="el-icon-document"></i>
            <span slot="title">富文本编辑</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="layout_content">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="index">
            <router-link :to="item.path">{{item.name}}</router-link>
          </el-breadcrumb-item>
        </el-breadcrumb>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  created() {
    console.log("面包屑", this.$route.matched);
  },
  methods: {
    Collapse() {
      this.isCollapse = !this.isCollapse;
    },
    logout() {
      this.$router.push("/login");
      console.log("退出登录");
    }
  }
};
</script>

<style lang="scss" scoped>
.layout {
  .layout_header {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #eef1f6;
    color: #fff;
    font-size: 22px;
    padding-right: 50px;
    > span {
      display: inline-block;
      width: 160px;
      height: 70px;
      line-height: 70px;
      text-align: center;
      border-bottom: solid 2px #fff;
      background: #324157;
      position: relative;
      transition: all 0.3s ease-in-out;
      i {
        color: #324157;
        position: absolute;
        top: 50%;
        right: -40px;
        transform: translateY(-50%);
      }
    }
    .el-dropdown-link {
      font-size: 24px;
      color: #324157;
    }
    .el-dropdown-link:hover {
      cursor: pointer;
    }
  }
  .layout_conten {
    display: flex;
    justify-content: flex-start;
    min-height:calc(100vh - 70px);
    .layout_aside {
      .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 160px;
        // min-height: calc(100vh - 70px);
        height: 100%;
        text-align: left;
        overflow: hidden;
      }
      .el-menu--collapse {
        // min-height: calc(100vh - 70px);
        height: 100%;
      }
    }
  }
  .el-breadcrumb {
    padding: 20px;
  }
  .el-menu-item,
  .el-submenu__title {
    height: 40px;
    line-height: 40px;
  }
}
</style>