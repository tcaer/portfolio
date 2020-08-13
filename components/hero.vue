<script>
export default {
  data: function() {
    return {
      playAnimation: false
    };
  },
  mounted: function() {
    setTimeout(() => {
      this.playAnimation = true;
    }, 600);
  }
}
</script>

<template>
  <section class='hero' v-bind:class="{frozen: !playAnimation}">
    <div class='line parent1'>
      <span class='child1'>Student at the</span>
    </div>
    <div class='line parent2'>
      <span class='child2'>University of Illinois</span>
    </div>
    <div class='line parent3'>
      <span class='child3'>studying Physics with</span>
    </div>
    <div class='line parent4'>
      <span class='child4-left'>an interest</span>&nbsp;
      <span class='child4-right'>in</span>
    </div>
    <div class='line parent5'>
      <span class='child5'>AI and computer graphics</span>
    </div>
  </section>
</template>

<style lang='scss' scoped>
.hero {
  padding: 10vh 4%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  z-index: 0;
  &.frozen {
    .child1 {
      transform: translateX(56%);
    }
    .child2 {
      transform: translateX(-24%);
    }
    .child3 {
      transform: translateX(-18%);
    }
    .child4-left {
      transform: translateX(70%);
    }
    .child4-right {
      transform: translateX(-505%);
    }
    .child5 {
      transform: translateX(-7%);
    }
  }
}
.child1 {
  transition-delay: 15ms;
}
.child2 {
  transition-delay: 30ms;
}
.child3 {
  transition-delay: 45ms;
}
.child4-left {
  transition-delay: 60ms;
}
.child4-right {
  transition-delay: 75ms;
}
.child5 {
  transition-delay: 90ms;
}
.line {
  display: flex;
  flex-direction: row;
  span {
    color: #fff;
    font-size: 6.5vw;
    line-height: 1.2;
    font-family: 'Chivo', sans-serif;
    display: inline-block;
    transition: transform 1.2s cubic-bezier(1,0,.25,1);
    transform: translateX(0%);
    @media screen and (orientation: portrait) {
      font-size: 6.5vmin
    }
    @media screen and (orientation: landscape) {
      font-size: 6.5vmax;
    }
  }
  &.parent2 {
    justify-content: flex-end;
  }
  &.parent3 {
    justify-content: flex-end;
  }
  &.parent4 {
    justify-content: space-between;
  }
  &.parent5 {
    justify-content: flex-end;
  }
}
</style>
