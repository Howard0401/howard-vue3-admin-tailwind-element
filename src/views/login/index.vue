<template>
  <div class="bg-slate-500 h-full w-full">
     <canvas id="sky" style="position: absolute;"></canvas>
        <div class="h-28"></div>
        <div class="z-50 w-full flex justify-center" style="position: absolute;">
          
          <div class="flex justify-center">
            <div class="h-login-page-block w-80 bg-gray-50 rounded-xl">
                <div class="h-6"></div>
                <!-- Login Page -->
                <div class="h-12 flex justify-center 
                            text-3xl text-gray-800">
                  Login Page
                </div>

                <div class="h-8"></div>

                <!-- Admin -->
                <div class="flex justify-center">
                  <div class="">
                    <div class="h-6 ml-2 text-gray-600 text-sm font-medium">
                        Account
                    </div>
                    <input class="w-60 h-8 
                                  rounded-sm pl-2
                                  caret-black
                                  text-blue-600
                                  bg-gray-50
                                  border-b-gray-600 border-b" type="text" />
                    <div class="h-10"></div>
                    <div class="h-6 ml-2 text-gray-600 text-sm font-medium">
                        Password
                    </div>
                    <div class="flex justify-center">
                      <input class="w-60 h-8 
                                    caret-black
                                    text-blue-600
                                    rounded-sm pl-2
                                    bg-gray-50
                                    border-b-gray-600 border-b" type="password" />
                      <div class="-ml-10 cursor-pointer">ICON</div>
                    </div>              
                    
                  </div>
                </div> 

                <div class="h-12"></div>

                <!-- Login btn -->
                <div class="flex justify-center">
                  <button  class="h-12 w-36 bg-green-300  text-gray-600 ">
                    Login
                  </button>
                </div>
            </div>
          </div>
        </div>
    
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
      const setCanvas = () => {
      // get the canvas and context
      let canvas = document.getElementById('sky');
      console.log("canvas=",canvas)
      let ctx = canvas.getContext('2d');

      // set canvas dims to window height and width
      let W = window.innerWidth;
      let H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;

      // generate snowflakes and apply attributes
      let flakesCount = 100;
      let flakes = []; // flake instances

      // loop through the empty flakes and apply attributes
      for (let i = 0; i < flakesCount; i++) {
        flakes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 5 + 2, // 2px - 7px
          d: Math.random() + 1
        });
      }

      // draw flakes onto canvas
      function drawFlakes() {
        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        for (let i = 0; i < flakesCount; i++) {
          let flake = flakes[i];
          ctx.moveTo(flake.x, flake.y);
          ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2, true);
          ctx.lineTo(flake.x, flake.y)
          ctx.shadowBlur = 15;
          // ctx.lineTo(flake.x, flake.y)
        }
        ctx.fill();
        moveFlakes();
      }

      let angle = 0;

      function moveFlakes() {
        angle += 0.05;
        for (let i = 0; i < flakesCount; i++) {
          let flake = flakes[i];
          flake.y += Math.pow(flake.d, 2) + 1;
          flake.x += Math.sin(angle) * 1;

          if (flake.y > H) {
            flakes[i] = { x: Math.random() * W, y: 0, r: flake.r, d: flake.d };
          }
        }
      }

      setInterval(drawFlakes, 25);
  }
   setCanvas()

})

</script>

<style scoped>

input:focus {
  outline: none;
}

</style>