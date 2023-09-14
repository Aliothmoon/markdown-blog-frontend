<script lang="ts">
import {defineComponent} from 'vue'
import {NBackTop, NIcon} from "naive-ui";

export default defineComponent({
  name: "AnchorToolBar",
  components: {
    NIcon
  },
  setup: () => {
    const scrollElement = document.documentElement
    const scrollUp = () => {
      const timer = setTimeout(() => {
        scrollElement.scrollTop = 5
      }, 1200)
      const interval = setInterval(() => {
        if (scrollElement.scrollTop >= 10) {
          scrollElement.scrollBy(0, -100)
        } else {
          clearTimeout(timer);
          clearInterval(interval)
        }
      }, 10)

    }

    const scrollDown = (() => {
      let status = true;
      return () => {
        status = true
        const timer = setTimeout(() => {
          status = false
        }, 400)
        const interval = setInterval(() => {
          if (status) {
            scrollElement.scrollBy(0, 12)
          } else {
            clearInterval(interval)
          }
        }, 10)
      }
    })()

    const hoverUp = (() => {
      let interval;
      const HUP = () => {
        interval = setInterval(() => {
          scrollElement.scrollBy(0, -2)
          if (scrollElement.scrollTop < 10) {
            clearInterval(interval)
          }
        }, 12)
      }
      const HUPE = () => {
        clearInterval(interval)
      }
      return [HUP, HUPE]
    })()
    const hoverDown = (() => {
      let interval;
      const HDOWN = () => {
        interval = setInterval(() => {
          scrollElement.scrollBy(0, 2)
          if (scrollElement.scrollTop > scrollElement.scrollHeight - 10) {
            clearInterval(interval)
          }
        }, 12)
      }
      const HDOWNE = () => {
        clearInterval(interval)
      }
      return [HDOWN, HDOWNE]
    })()

    return {
      scrollUp, scrollDown,
      hoverUp, hoverDown
    }
  }
})
</script>

<template>
  <div class="warp-card mt-3">
    <div class="card">
      <!--    <span>Social</span>-->
      <div class="social-link">
        <svg t="1689521521912" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="1896" width="200" height="200">
          <path d="M0 57.824l662.338 838.966 58.876-199.756z" fill="#C6CBCB" p-id="1897"></path>
          <path d="M462.94 468.128l-45.466 118.498 244.864 310.164 58.876-199.756z" fill="#D672AD" p-id="1898"></path>
          <path d="M662.338 896.79l-60.976-149.292L0 57.824l534.078 733.83z" fill="#D1D5D5" p-id="1899"></path>
          <path d="M601.362 747.498L256.524 966.174 0 57.824zM721.214 697.034L0 57.824l1024 506.742z" fill="#E2E5E7"
                p-id="1900"></path>
          <path
              d="M365.292 476.764l-117.786 457.484 9.018 31.926 345.166-218.938zM981.854 543.712L462.94 468.128 720.964 697.88 1024 564.566z"
              fill="#EA8EBC" p-id="1901"></path>
          <path d="M365.292 476.764l-117.786 457.484 135.096-437.678zM462.94 468.128l23.012 20.492 495.902 55.092z"
                fill="#D672AD" p-id="1902"></path>
          <path d="M601.69 747.236l-68.374 43.372 52.326 43.312z" fill="#C6CBCB" p-id="1903"></path>
          <path d="M25.428 147.868l20.584-37.276L0 57.824zM55.82 107.296l46.462 1.144L0 57.824z" fill="#EA8EBC"
                p-id="1904"></path>
        </svg>
      </div>
      <div class="social-link">
        <svg t="1689521571479" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="2042" width="200" height="200">
          <path
              d="M0 241.003303v709.973013h443.733406c0 37.702481 30.565206 68.267687 68.267687 68.267687 37.702481 0 68.267687-30.565206 68.267687-68.267687h443.733407V241.003303H0z"
              fill="#64798A" p-id="2043"></path>
          <path d="M62.776971 206.08226h898.443872v681.668819H62.776971z" fill="#EBF0F3" p-id="2044"></path>
          <path d="M199.773731 80.012266l354.887013 242.000423v565.734017l-341.237849-135.004709z" fill="#E1E6E9"
                p-id="2045"></path>
          <path d="M554.660744 214.168548L398.19173 4.755997v654.333317l156.469014 228.657392z" fill="#D5D6DB"
                p-id="2046"></path>
          <path d="M789.318346 206.077887v171.008151l51.439111-27.307075 44.133464 27.307075V206.077887z" fill="#E56353"
                p-id="2047"></path>
        </svg>
      </div>
      <div class="social-link" @click="scrollUp" @mouseenter="hoverUp[0]" @mouseleave="hoverUp[1]">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <g fill="none">
            <path
                d="M5.854 6.854a.5.5 0 1 1-.708-.708l4-4a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1-.708.708L10 3.707V10c0 1.965.247 3.38.764 4.473c.512 1.08 1.308 1.887 2.493 2.598a.5.5 0 0 1-.514.858c-1.315-.79-2.269-1.732-2.882-3.027C9.253 13.619 9 12.035 9 10V3.707L5.854 6.854z"
                fill="black"></path>
          </g>
        </svg>

      </div>
      <div class="social-link" @click="scrollDown" @mouseenter="hoverDown[0]" @mouseleave="hoverDown[1]">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <g fill="none">
            <path
                d="M6.743 2.929a.5.5 0 1 1 .514-.858c1.315.79 2.269 1.732 2.882 3.028C10.747 6.38 11 7.965 11 10v6.293l3.146-3.146a.5.5 0 0 1 .708.707l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 1 1 .708-.707L10 16.293V10c0-1.965-.247-3.38-.764-4.473c-.512-1.08-1.308-1.887-2.493-2.598z"
                fill="black"></path>
          </g>
        </svg>

      </div>
    </div>
  </div>

</template>

<style scoped lang="less">
.warp-card {
  width: 100%;
  //position: fixed;
  //left: 10px;
  //bottom: 50px;
}


.card svg {
  height: 20px;
}

.card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fffdfd;
  //box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
  height: 50px;
  width: 280px;
}

// region Description
//.card::before, .card::after {
//  position: absolute;
//  display: flex;
//  align-items: center;
//  width: 50%;
//  height: 100%;
//  transition: 0.25s linear;
//  z-index: 1;
//}
//
//.card::before {
//  content: "";
//  left: 0;
//  justify-content: flex-end;
//  background-color: #4d60b6;
//}
//
//.card::after {
//  content: "";
//  right: 0;
//  justify-content: flex-start;
//  background-color: #4453a6;
//}
//
//.card:hover {
//  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
//}
// endregion


.card:hover span {
  opacity: 0;
  z-index: -3;
}

.card:hover::before {
  opacity: 0.5;
  transform: translateY(-100%);
}

.card:hover::after {
  opacity: 0.5;
  transform: translateY(100%);
}

.card span {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: whitesmoke;
  font-family: 'Fira Mono', monospace;
  font-size: 24px;
  font-weight: 700;
  opacity: 1;
  transition: opacity 0.25s;
  z-index: 2;
}

.card .social-link {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 100%;
  color: whitesmoke;
  font-size: 24px;
  text-decoration: none;
  transition: 0.25s;
}

.card .social-link svg {
  text-shadow: 1px 1px rgba(31, 74, 121, 0.7);
  transform: scale(1);
}

.card .social-link:hover {
  background-color: rgba(222, 223, 224, .7);
  //animation: bounce_613 0.4s linear;
  transform: scale(1.1);
}

@keyframes bounce_613 {
  40% {
    transform: scale(1.4);
  }

  60% {
    transform: scale(0.8);
  }

  80% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>