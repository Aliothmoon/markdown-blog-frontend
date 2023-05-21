<template>

    <div class="containerB" style="background-color:#262525;">
      <div class="boxB">
        <span class="titleB">GLASS EFFECT</span>
        <div>
          <strong>JOE WATSON SBF</strong>
          <p>0000 000 000 0000</p>
          <span>VALID</span> <span>01/28</span>
        </div>
      </div>
    </div>


</template>
<script>

</script>
<style>
.containerB {
  position: relative;
  font-family: sans-serif;
}

.containerB::before, .containerB::after {
  content: "";
  background-color: #fab5704c;
  position: absolute;
}

.containerB::before {
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  top: 30%;
  right: 7%;
}

.containerB::after {
  content: "";
  position: absolute;
  height: 3rem;
  top: 8%;
  right: 5%;
  border: 1px solid;
}

.containerB .boxB {
  width: 11.875em;
  height: 15.875em;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.074);
  border: 1px solid rgba(255, 255, 255, 0.222);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-radius: .7rem;
  transition: all ease .3s;
}

.containerB .boxB {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.containerB .boxB .titleB {
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: .1em
}

.containerB .boxB div strong {
  display: block;
  margin-bottom: .5rem;
}

.containerB .boxB div p {
  margin: 0;
  font-size: .9em;
  font-weight: 300;
  letter-spacing: .1em;
}

.containerB .boxB div span {
  font-size: .7rem;
  font-weight: 300;
}

.containerB .boxB div span:nth-child(3) {
  font-weight: 500;
  margin-right: .2rem;
}

.containerB .boxB:hover {
  box-shadow: 0 0 20px 1px #ffbb763f;
  border: 1px solid rgba(255, 255, 255, 0.454);
}
</style>