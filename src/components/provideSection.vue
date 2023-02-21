<template>
  <section class="provideSection">
    <div class="container">
      <div class="heading">
        <h2>We provide various kind of service for you</h2>
        <p>
          After Much Research And Study Of Previous Works, We Have Determined
          That We Come Up With A Set Of Characteristics That Benefit Our User
        </p>
      </div>
      <div class="row">
        <div class="col-lg-3 service" v-for="serv in services" :key="serv">
          <div class="inner-service">
            <div class="image">
              <img
                :src="serv.image"
                alt="serv.name"
                class="image1"
                width="90"
                height="90"
              />
              <img :src="serv.image2" class="image2" />
            </div>
            <h4>{{ serv.title }}</h4>
            <p>{{ serv.description }}</p>
            <ul v-for="item in serv.list" :key="item">
              <li>{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.provideSection {
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
  margin: var(--marginTopBotton) 0;

  .service {
    margin: 20px 0;
    .inner-service {
      height: 400px;
      padding: 15px 20px;
      box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
      border-radius: 15px;
      .image {
        height: 150px;
        margin-bottom: 30px;
        position: relative;
        z-index: 1;
        .image1 {
          position: absolute;
          z-index: 99;
          left: 80px;
          top: 12%;
        }
        .image2 {
          position: absolute;
          z-index: 2;
          left: 40px;
          height: 150px;

          img {
            height: 100%;
          }
        }
      }
      p {
        padding-top: 15px;
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      services: [
        {
          image: require("@/assets/image/s1.png"),
          image2: require("@/assets/image/1.png"),
          title: "Inbody Analysis",
          description:
            " Many People Now Need To Have A Healthy System To Follow To Improve And Control Their Health, ",
          list: "",
        },
        {
          image: require("@/assets/image/s2.png"),
          image2: require("@/assets/image/2.png"),

          title: "Stack",
          description: "Record For Doctors, Laboratories And Pharmacies",
          list: "",
        },
        {
          image: require("@/assets/image/s3.png"),
          image2: require("@/assets/image/3.png"),

          title: "Medical Record",
          description:
            "An Idea That Is Completely Identical To The Idea Of The Medical Record, And The Doctor Is Able To Allow Him To Enter It And Modify It By Adding The Latest Health Results",
          list: "",
        },
        {
          image: require("@/assets/image/s4.png"),
          image2: require("@/assets/image/1.png"),

          title: "Articals",
          description:
            "Articles About Health In General, User Can Search In It, Health Article Related To The Status Of The User.",
          list: "",
        },
        {
          image: require("@/assets/image/s5.png"),
          image2: require("@/assets/image/2.png"),

          title: "Calender",
          description: "There Are 3 Options : ",
          list: ["	Follow Up Alarm", "	Medicine Alarm: ", "	Tests And Rays Alarm"],
        },
        {
          image: require("@/assets/image/s6.png"),
          image2: require("@/assets/image/3.png"),

          title: "Request A Nurse",
          description:
            "You Can Easily Ask For Nurse Request From The App Either From Hospital Services Or A Freelancer Nurse. ",
          list: "",
        },
      ],
    };
  },
};
</script>