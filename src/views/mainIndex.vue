<template>
  <div>
    <theHeader />
    <provideSection />
    <WhySection/>
    <OurPortifilio/>
    <feedBack/>
    <theFooter/>
  </div>
</template>
<script>
import OurPortifilio from "@/components/OurPortifilio.vue";
import provideSection from "@/components/provideSection.vue";
import theHeader from "@/components/theHeader.vue";
import WhySection from "@/components/WhySection.vue";
import feedBack from "@/components/feedBack.vue";
import theFooter from "@/components/theFooter.vue";
export default {
  components: {
    theHeader,
    provideSection,
    WhySection,
    OurPortifilio,
    feedBack,
    theFooter
},
};
</script>