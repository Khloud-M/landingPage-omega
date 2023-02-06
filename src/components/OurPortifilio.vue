<template>
      <section class="ourPortiflio">
    <div class="heading">
      <h2>Our Portfolio</h2>
      <p>
        A Simple And Very Easy To Use Design Has Been Made To Suit All Ages
      </p>
    </div>
  <div class="container_Port">
    <div class="row">      
      <div class="col-lg-3 col-md-6 col-xs-12"><img src="@/assets/image/p1.png" alt="portifeio"/> </div>
      <div class="col-lg-3 col-md-6 col-xs-12"><img src="@/assets/image/p2.png" alt="portifeio"/> </div>
      <div class="col-lg-3 col-md-6 col-xs-12"><img src="@/assets/image/p3.png" alt="portifeio"/> </div>
      <div class="col-lg-3 col-md-6 col-xs-12"><img src="@/assets/image/p4.png" alt="portifeio"/> </div>
    </div>
  </div>
  </section>
</template>
<style lang="scss" scoped>
.ourPortiflio {
  margin: var(--marginTopBotton) 0;
  text-align: center;
  overflow: hidden;
}
.heading {
  width: 40%;
  margin: auto;
  p {
    margin: 20px 0;
    font-size: 16px;
  }
}
.container_Port{
    width: 90%;
    margin: auto;    
    position: relative;
     &::before{
        content: "";
        position: absolute;
        background-image: url("@/assets/image/p.png");
        left: 93%;
        top: 1%;
        height: 100%;
        width: 100%;
        background-repeat: no-repeat;
        z-index: -1;

    }

}
.row{
    // width: 80%;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
   
     div {
        img{
            width: 100%;
        }
    }


}


</style>