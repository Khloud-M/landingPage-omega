<template>
  <section class="feedback">
    <h2>Our Clients Feedback From Some Reports</h2>
    <div class="row">
      <div class="content col-lg-6">
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
      </div>
      <div class="button col-lg-4">
        <button>Read More</button>
        <img src="@/assets/image/arrow.png" width="40" />
      </div>
    </div>
    <div class="row2">
      <div class="image col-lg-4">
        <img src="@/assets/image/phone.png" alt="phone" />
      </div>
      <div class="content col-lg-8">
        <span> <img src="@/assets/image/star.png" /></span>
        <span> <img src="@/assets/image/star.png" /></span>
        <span> <img src="@/assets/image/star.png" /></span>
        <span> <img src="@/assets/image/star.png" /></span>
        <span> <img src="@/assets/image/star.png" /></span>
        <p>
          "Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem
          Accusantium Doloremque Laudantium
        </p>
        <p>Totam Rem Aperiam, Eaque Ipsa Quae Ab Illo Modi Tem."</p>
        <h5>Riad Isalm</h5>
        <small>
          Product Manager. <a href="mailto:xyz@abc.com"> @Pixbay</a>
        </small>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.feedback {
  margin: var(--marginTopBotton) 0;
  padding: 20px 130px;
  @media (max-width: 480px) {
    & {
      padding: 20px 10px;
    }
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0;

    .button {
      border: 1px solid var(--main-color);
      width: 180px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border-radius: 30px;
      cursor: pointer;
      //   padding: 12px 7px;
      transition: all 0.3s ease;
      &:hover {
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
.row2 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #efeffe;
  @media (max-width: 480px) {
      & {
        row-gap: 20px;
       
      }
    }
  .image {
    img {
      width: 100%;
    }
  }

  .content {
    width: 30%;
    height: 300px;
    margin: auto 40px ;
    img{
        width: 40px;
        margin: 20px 0 ;
      }
    @media (max-width: 480px) {
      & {
        width: 100%;
      }
      img{
        width: 35px;
      }
    }
    span {
      display: inline-block;
      margin-left: 15px;
    }
  }
}
</style>