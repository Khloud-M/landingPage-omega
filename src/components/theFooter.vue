<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="contact_us">
          <div class="content col-lg-6">
            <h3>Contact Us!</h3>
            <p>There are many variations of passages of Lorem Ipsum</p>
            <p>but the majority have suffered alteration.</p>
          </div>
          <div class="button col-lg-5">
            <input type="email" placeholder="Email here" />
            <button>send</button>
          </div>
        </div>
        <div class="logo col-lg-3 col-md-6 col-xs-12">
          <img src="@/assets/image/logo.png" />
          <h2>OMEGA</h2>
        </div>
        <div class="col-lg-3 col-md-6 col-xs-12">
          <h6>Links</h6>
          <ul>
            <li>Home</li>
            <li>Pricing</li>
            <li>Download</li>
            <li>About</li>
            <li>Service</li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 col-xs-12">
          <h6>Support</h6>
          <ul>
            <li>FAQ</li>
            <li>How it Works</li>
            <li>Features</li>
            <li>Contact</li>
            <li>Reporting</li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 col-xs-12">
          <h6>Contact Us</h6>
          <ul>
            <li>+880 12345678</li>
            <li>youremail@gmail.com</li>
            <li>Rangpur City</li>
          </ul>
        </div>
      </div>
      <div class="by">
        Copyright & Design By @Toqa Elbauomy
      </div>
      <div class="privacy">
        <h6>Terms of use</h6>
        |
        <h6>Privacy Policy</h6>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  background-color: #ebebf8;
  padding: 120px 0;
  margin-top: 150px;
  position: relative;
  .contact_us {
    position: absolute;
    width: 60%;
    height: 150px;
    left: 20%;
    top: -18%;
    border-radius: 15px;
    background-color: #ea6b13;
    display: flex;
    flex-direction: row;
    padding: 20px 50px;
    color: #fff;
    .button {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      border-radius: 20px;
      height: 70px;
      // text-align: center;
      padding: 0 20px;
      line-height: 70px;
      button {
        background: none;
        border: none;
        background-color: #00655f;
        color: #fff;
        width: 100px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        border-radius: 30px;
        text-transform: capitalize;
      }
      input {
        outline: none;
        border: none;
        background: none;
        &::placeholder {
          font-size: 18px;
        }
      }
    }
  }
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
    margin: 0;
    padding: 0;
    h6 {
      font-size: 18px;
    }
    li {
      list-style: none;
      margin: 0;
      padding: 0;
      color: #8a8a8a;
      cursor: pointer;
    }
  }
  .privacy {
    width: 32%;
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: row;
    column-gap: 30px;
    margin-top: 40px;
    h6 {
      color: #677294;
      cursor: pointer;
    }
  }
  .by{
    color: #677294;
    position: absolute;
    margin-top: 40px;


  }
}
</style>