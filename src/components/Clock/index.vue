<script lang="ts">
import {defineComponent, reactive, ref} from "vue";
import * as dayjs from 'dayjs'
import {dateMap, dayMap, monthMap} from "@/components/Clock/data.ts";
import type {ClockStatus} from "@/components/Clock/type"

function getTimeStateStyle() {
  const hours = new Date().getHours();
  let state = ``;
  if (hours >= 0 && hours <= 10) {
    state = `background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);`;
  } else if (hours > 10 && hours <= 14) {
    state = `background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);`;
  } else if (hours > 14 && hours <= 18) {
    state = `background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);`;
  } else if (hours > 18 && hours <= 24) {
    state = `background: linear-gradient(to right, rgb(20, 30, 48), rgb(36, 59, 85));`;
  }
  return state;
}


function update(status: ClockStatus, rf) {
  const djs = dayjs();
  status.subTime = djs.format('hh:mm')
  status.night = djs.format('A')
  status.weekDay = dayMap[djs.day()]
  status.month = monthMap[djs.month()]
  status.date = dateMap[djs.date() - 1]
  rf.value = getTimeStateStyle();

}

export default defineComponent({
  name: "RAsideClock",
  setup() {
    const nightStyle = ref('')
    const status = reactive({
      subTime: '',
      night: '',
      month: '',
      date: '',
      weekDay: '',
    });
    setInterval(() => {
      update(status, nightStyle)
    }, 500)
    return {
      status,
      nightStyle
    }
  }
})
</script>

<template>
  <div class="card" :style="nightStyle">
    <p class="time-text">
      <!--      <span>11:11</span>-->
      <span>{{ status.subTime }}</span>
      <span class="time-sub-text">{{ status.night }}</span></p>
    <p class="day-text">{{ status.weekDay }} ,&nbsp; {{ status.month }} &nbsp; {{ status.date }}</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" stroke-width="0"
         fill="currentColor" stroke="currentColor" class="moon">
      <path
          d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
      <path
          d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
    </svg>
  </div>
</template>

<style scoped lang="less">
@card-w: 200px;
@card-h: 100px;

.card {
  width: @card-w;
  height: @card-h;
  background: rgb(17, 4, 134);
  border-radius: 15px;
  //box-shadow: rgb(0, 0, 0, 0.2) 5px 10px 50px, rgb(0, 0, 0, 0.2) -5px 0px 250px;
  box-shadow: 17px 17px 52px #878787,
    -17px -17px 52px #ffffff;
  display: flex;
  color: white;
  justify-content: center;
  position: relative;
  flex-direction: column;

  cursor: pointer;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}

.card:hover {
  //box-shadow: rgb(0, 0, 0) 5px 10px 50px, rgb(0, 0, 0) -5px 0px 250px;
  box-shadow: 17px 17px 52px #878787,
    -17px -17px 52px #ffffff;
}

.time-text {
  font-size: 40px;
  margin-top: 0;
  margin-left: 15px;
  font-weight: 600;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.time-sub-text {
  font-size: 13px;
  margin-left: 5px;
}

.day-text {
  font-size: 18px;
  margin-top: 0px;
  margin-left: 15px;
  font-weight: 500;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.moon {
  font-size: 20px;
  position: absolute;
  right: 15px;
  top: 15px;
  transition: all 0.3s ease-in-out;
}

.card:hover > .moon {
  font-size: 23px;
}

</style>