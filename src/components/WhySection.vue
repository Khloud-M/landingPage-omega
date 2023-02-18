<template>
  <section class="whySection">
    <div class="heading">
      <h2>Why Us</h2>
      <p>
        Because We Worked On Providing The Largest Number Of Services In One
        Place And It Has Many Advantages That Any User Can Use Easily And
        Without Problems
      </p>
    </div>
    <div class="row">
      <div class="col-lg-5 image">
        <img src="@/assets/image/mobile.png" alt="mobile" />
      </div>
      <div class="col-lg-6 content">
        <h3>
          Built The App That <br />
          Everyone Love.
        </h3>
        <p>
          It Is A Long Established Fact That A Reader Will Be Distracted By The
          Readable Content Of A Page When Looking At Its Layout. The Point Of
          Using Lorem Ipsum Is That It Has A More-Or-Less Normal Distribution Of
          Letters, As Opposed To Using 'Content Here, Content Here', Making It
          Look Like Readable English. Many Desktop Publishing Packages And Web
          Page Editors Now Use Lorem Ipsum As Their Default Model Text, And A
          Search For 'Lorem Ipsum' Will Uncover Many Web Sites Still In Their
          Infancy. Various Versions Have Evolved Over The Years, Sometimes By
          Accident, Sometimes On Purpose (Injected Humour And The Like).
        </p>
        <p>
          It Is A Long Established Fact That A Reader Will Be Distracted By The
          Readable Content Of A Page When Looking At Its Layout. The Point Of
          Using Lorem Ipsum Is That It Has A More-Or-Less Normal Distribution Of
          Letters, As Opposed To Using 'Content Here, Content Here', Making It
          Look Like Readable English. Many Desktop Publishing Packages And Web
          Page Editors Now Use Lorem Ipsum As Their Default Model Text, And A
          Search For 'Lorem Ipsum' Will Uncover Many Web Sites Still In Their
          Infancy. Various Versions Have Evolved Over The Years, Sometimes By
          Accident, Sometimes On Purpose (Injected Humour And The Like).
        </p>
        <div class="botton">
          <button>Get More</button>
          <img src="@/assets/image/arrow.png" width="40" />
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.whySection {
  margin: var(--marginTopBotton) 0;
  text-align: center;
}
.heading {
  width: 40%;
  margin: auto;
  p {
    margin: 20px 0;
    font-size: 16px;
  }
  @media (max-width: 480px) {
    & {
      width: 100%;
      padding: 0 10px;
    }
  }
}
.row {
  margin: var(--marginTopBotton) 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 480px) {
     row-gap:  200px;
  }
  .image {
    position: relative;
    img {
      position: absolute;
      left: -10px;
      width: 100%;
    }
  }
  .content {
    margin-top: 80px;
    text-align: justify;
    padding: 20px 50px;
    h3 {
      margin: 40px 0;
      line-height: 40px;
    }
    p {
      font-size: 16px;
      color: #707070;
    }
    .botton {
      border: 1px solid var(--second-color);
      width: 180px;
      text-align: center;
      border-radius: 30px;
      cursor: pointer;
      padding: 12px 7px;
      transition: all 0.3s ease;
      &:hover  {
        background-color: var(--second-color);
      }
      &:hover button {
        color: #fff;
      }

      button {
        background: none;
        border: none;
        color: #707070;
        font-size: 20px;
       
      }
    }
  }
}
</style>