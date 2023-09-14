<script lang="ts">
import {defineComponent, ref, toRefs} from 'vue'
import {NModal, NScrollbar} from "naive-ui";
import {data} from '@/components/HeadLine/SearchModal/mock.ts'

export default defineComponent({
  name: "SearchModal",
  components: {
    NScrollbar,
    NModal
  },
  props: {
    show: Boolean
  },
  emits: [
    'update:show'
  ],
  setup(props) {
    const show = toRefs(props).show;
    return {
      show,
      data
    }
  }
})
</script>

<template>
  <n-modal :show="show" @update:show="(e)=>$emit('update:show',e)"
           transform-origin="center"
           size="small"
           style="width: 400px; position: fixed;
           top: 100px; left:50%;
           transform: translateX(-50%);
           border-radius: 7px;background-color: rgb(255,255,255);
           backdrop-filter: blur(2px)"
  >
    <template #default>
      <div class="search-box">
        <div class="mt-2 flex justify-center">
          <div class="input-container">
            <input type="text" name="text" class="input" placeholder="SEARCH ..." autocomplete="off">
            <span class="icon">
        <svg width="19px" height="19px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g
               id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round"
                                                              stroke-linejoin="round"></g>
           <g id="SVGRepo_iconCarrier"> <path
               opacity="1" d="M14 5H20" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      </path> <path
               opacity="1" d="M14 8H17" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
           </path> <path
               d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000"
               stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      </path>
          <path opacity="1" d="M22 22L20 20" stroke="#000" stroke-width="3.5" stroke-linecap="round"
                stroke-linejoin="round"></path>
            </g>
        </svg>
  </span>
          </div>
        </div>
        <div class="mt-4 mx-6 mb-6">
          <n-scrollbar style="max-height: 270px;" :size="1">
            <div class="item flex items-center" v-for="i in [...data,...data,...data]">
              <p class="ml-2 ">{{ i }}</p>
            </div>
          </n-scrollbar>
        </div>
      </div>
    </template>

  </n-modal>
</template>

<style scoped lang="less">
.search-box {
  padding-top: 12px;
}

p {
  font-weight: bold;
  font-family: TiZhong, 喜鹊聚珍体;
}

.item {
  width: 90%;
  height: 30px;
  margin: 10px 12px 0 2px;
  border-radius: 2px;
  transition-duration: 1s;
}

.item:hover {
  background-color: rgb(243, 243, 245);
}


@input-container-w: 320px;

.input-container {
  width: @input-container-w;
  position: relative;
}

.icon {
  position: absolute;
  right: 10px;
  top: calc(50% + 5px);
  transform: translateY(calc(-50% - 5px));
}

.input {
  width: 100%;
  height: 40px;
  padding: 10px;
  transition: .2s linear;
  border: 2.5px solid black;
  font-size: 14px;
  //text-transform: uppercase;
  letter-spacing: 1px;
}

.input:focus {
  outline: none;
  border: 0.5px solid black;
  box-shadow: -5px -5px 0px black;
}

.input-container:hover > .icon {
  animation: anim 1s linear infinite;
}

@keyframes anim {
  0%,
  100% {
    transform: translateY(calc(-50% - 5px)) scale(1);
  }

  50% {
    transform: translateY(calc(-50% - 5px)) scale(1.1);
  }
}
</style>