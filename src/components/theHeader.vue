<template>
  <section class="header">
    <div class="ground2">
      <img src="@/assets/image/ground2.png" />
    </div>
    <div class="ground3">
      <img src="@/assets/image/ground3.png" />
    </div>
    <div class="container">
      <nav>
        <div class="logo">
          <img src="@/assets/image/logo.png" />
          <h2>OMEGA</h2>
        </div>
        <ul>
          <li>Home</li>
          <li>Services Us</li>
          <li>Why Us</li>
          <li>Our Goals</li>
          <li>Our Portfolio</li>
          <li>Our Client</li>
          <button>contact us</button>
        </ul>
      </nav>
      <!-- end nav -->
      <div class="content">
        <div class="details col-lg-5">
          <h1>We Create Application With Excellent Technology.</h1>
          <p>
            Due To The Progress Of The World Today And The Progress Of Science
            And With The Increase In Life's Preoccupations, The Interest In
            Health Has Become Very Weak, And The Person Is Making A Continuous
            Health Deterioration.
          </p>
        </div>
        <div class="image col-lg-7">
          <img
            src="@/assets/image/contentimage.png"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.header {
  background-image: url("../assets/image/ground1.png");
  height: 107vh;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  z-index: 2;
  .ground2 {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .ground3 {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .container {
    position: absolute;
    z-index: 99999999999;
    left: 13%;
    padding: 20px 0;
  }
}
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  .logo {
    display: flex;
    align-items: center;
    column-gap: 7px;
    h2 {
      color: var(--second-color);
      font-size: 22px;
    }
  }
  ul {
    display: flex;
    flex-direction: row;
    column-gap: 30px;
    li {
      list-style: none;
      color: var(--background);
      font-size: 20px;
      position: relative;
      cursor: pointer;
      &::before {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        left: 0;
        bottom: -10px;
        background-color: var(--second-color);
        transition: all 0.3s linear;
      }
      &:hover::before {
        width: 100%;
      }
    }
    button {
      border: none;
      padding: 7px 25px;
      border-radius: 20px;
      transition: all 0.3s linear;
      font-size: 20px;
      &:hover {
        border: 1px solid var(--second-color);
        color: var(--background);
        background-color: transparent;
      }
    }
  }
}
.content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  .details{
    margin-top: 100px;
    color: var(--background);
    h1{
      padding-bottom: 15px;
    }
    p{
      font-size: 18px;
    }
  }
  .image {
    img {
      width: 100%;
    }
  }
}
</style>