<template>
  <div class="panel">
    <q-scroll-area style="height: 100vh">
      <q-layout view="hhh lpR fff">
        <q-header elevated class="text-white o-header">
          <q-toolbar>
            <q-toolbar-title class="text-subtitle1">
              Aliothmoon's little home.
            </q-toolbar-title>
            <n-avatar src="imgs/ff.jpg"></n-avatar>
          </q-toolbar>
        </q-header>

        <q-page-container>
          <div style="height: 90vh;display:flex;flex-direction: column;justify-content:center;align-items:center;"
               class="page-container">
            <div class="typing">VENI VIDI VICI</div>
            <div style="margin-top:60px">
              <q-btn style="width: 10vw;height:6vh;" class="text-white" flat
                     @click="enter">
                Enter It
              </q-btn>
            </div>
          </div>
          <div style="height: 90vh;display:flex;justify-content:center;align-items:center;" class="page-container">
            <n-grid x-gap="12" :cols="5">
              <n-gi :offset="1">
                <div style="transform: translateY(-50px);height: 400px">
                  <div class="card">
                    <div class="content" style="z-index: 110;">
                      <p class="heading">Aliothmoon's
                        <br>Blog</p>
                      <p class="para">
                        Coder &nbsp; & &nbsp; Java Enthusiast <br>
                        Don't be afraid of change, Embrace it.
                        Cogito ergo sum <br>
                      </p>
                      <button class="btn" @click="$router.push('home')">Read more</button>
                    </div>
                  </div>
                </div>
              </n-gi>
              <n-gi :offset="1">
                <div style="width: 300px;transform: translateY(40px)">
                  <div class="cardA">
                    <div class="circleA"></div>
                    <div class="circleA"></div>
                    <div class="cardA-inner">
                      <div style="padding: 30px;transform: translateY(50%) ;position: absolute;bottom: 50%">
                        <n-avatar src="imgs/ff.jpg" size="1"></n-avatar>
                      </div>

                    </div>
                  </div>
                </div>
              </n-gi>
            </n-grid>
          </div>
          <div style=";height: 100vh;display:flex;justify-content:center;align-items:center;" class="page-container">
            <div class="text-a" style="">
              <span style="font-size:60px;color:rgba(245,222,179,0.89)">Fortiter in rē，suāviter in modō</span>
            </div>
          </div>
        </q-page-container>

        <q-footer elevated class="bg-grey-9 text-white o-footer text-center">
          <div>Copy Right By Aliothmoon 2023</div>
        </q-footer>

      </q-layout>
    </q-scroll-area>
  </div>

</template>

<script setup>
import {useRouter} from "vue-router";
import {NAvatar, NGi, NGrid} from "naive-ui";

const router = useRouter();
const enter = () => {
  router.push("/home");
}
</script>

<style scoped>


.cardA {
  width: 220px;
  height: 250px;
  transition: all 0.2s;
  position: relative;
  cursor: pointer;
}

.cardA-inner {
  width: inherit;
  height: inherit;
  background: rgba(255, 255, 255, .05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border-radius: 8px;
}

.cardA:hover {
  transform: scale(1.04) rotate(1deg);
}

.circleA {
  width: 100px;
  height: 100px;
  background: radial-gradient(#b0e633, #53ef7d);
  border-radius: 50%;
  position: absolute;
  animation: move-up6 2s ease-in infinite alternate-reverse;
}

.circleA:nth-child(1) {
  top: -25px;
  left: -25px;
}

.circleA:nth-child(2) {
  bottom: -25px;
  right: -25px;
  animation-name: move-down1;
}

/*Style A*/
@keyframes move-up6 {
  to {
    transform: translateY(-10px);
  }
}

@keyframes move-down1 {
  to {
    transform: translateY(10px);
  }
}

/*Style A*/
.card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 400px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  padding: 32px;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  color: #e8e8e8;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}

.content .heading {
  font-weight: 700;
  font-size: 32px;
}

.content .para {
  line-height: 1.5;
}

.content .btn {
  color: #e8e8e8;
  text-decoration: none;
  padding: 10px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.card::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
  /*z-index: -1;*/
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}

.card:hover::before {
  height: 100%;
}

.card:hover {
  box-shadow: none;
}

.card:hover .btn {
  color: #212121;
  background: #e8e8e8;
}

.content .btn:hover {
  outline: 2px solid #e8e8e8;
  background: transparent;
  color: #e8e8e8;
}

.content .btn:active {
  box-shadow: none;
}

/*Style 1*/

.typing {
  color: white;
  font-size: 4em;
  width: 7em;
  height: 1.5em;
  border-right: 1px solid transparent;
  animation: typing 1.2s steps(42, end), blink-caret .75s step-end infinite;
  word-break: break-all;
  overflow: hidden;
}

/* 打印效果 */
@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 7em;
  }
}

/* 光标 */
@keyframes blink-caret {

  from,
  to {
    border-color: transparent;
  }

  50% {
    border-color: currentColor;
  }
}


.o-header {
  /*background-color: rgb(58, 58, 58);*/
  /*background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);*/
  /*background-image: linear-gradient(to top, #09203f 0%, #537895 100%);*/
  /*background-image: linear-gradient(to right, #243949 0%, #517fa4 100%);*/
  background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255, 255, 255, 0.40) 0%, rgba(0, 0, 0, 0.25) 200%);
  background-blend-mode: multiply;
}

.page-container {
  /*background-color: rgba(0, 0, 0, 0.95);*/
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  /*background-image: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);*/
  /*background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);*/
}

.panel::-webkit-scrollbar {
  width: 0;
}

.o-footer {
}

.home-container {
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
}

.panel {
  font-family: HarmonyOS_Sans_Medium;
}

.home-son {
  width: 70%;
  height: 90%;
  background-color: rgb(36, 36, 36);
}
</style>