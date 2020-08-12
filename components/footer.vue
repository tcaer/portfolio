<script>
export default {
  props: ['resumeLink']
}
</script>

<template>
  <footer>
    <span class='email'>
      <span>Feel free to send me an email at</span>
      <a href='mailto:tino.caer@me.com'>tino.caer@me.com</a>
    </span>
    <div class='links'>
      <a class='link' rel='noreferrer' href='https://github.com/tcaer' target='_blank'>Github</a>
      <a class='link' href='https://medium.com/@tinocaer' target='_blank'>Medium</a>
      <a class='link' :href='resumeLink' target='_blank'>Resume</a>
      <a class='link' rel='noreferrer' href='https://www.linkedin.com/in/tinocaer' target='_blank'>LinkedIn</a>
    </div>
  </footer>
</template>

<style lang='scss' scoped>
footer {
  background: #000;
  z-index: 1;
  position: relative;
  padding: 160px 4% 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    color: #fff;
    text-decoration: none;
    position: relative;
    font-size: inherit;
    &::before {
      transform: scaleX(0);
      transform-origin: center right;
      content: '';
      top: 100%;
      left: 0;
      right: 0;
      height: .125rem;
      position: absolute;
      background-color: rgba(255, 255, 255, 0.9);
      transition-delay: .1s;
      transition: transform .15s cubic-bezier(.445,.05,.55,.95);
    }
    &:hover {
      color: #fff !important;
      &::before {
        transform: scaleX(1);
        transform-origin: center left;
        transition-delay: 0s;
      }
    }
  }
}
.email {
  font-family: 'Helvetica';
  font-size: 1.375rem;
  margin: 0 0 200px;
  span {
    color: #919191;
  }
  @media only screen and (max-width: 770px) {
    font-size: 3.8vw;
  }
}
.links {
  display: flex;
  flex-direction: row;

  .link {
    position: relative;
    color: #919191;
    transition-delay: .3s ease;
    font-family: 'Helvetica';
    text-decoration: none;
    &+.link {
      margin-left: 30px;
    }
  }
}
</style>
