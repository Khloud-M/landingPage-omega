<template>
  <div>
    <theHeader />
    <provideSection />
    <WhySection/>
    <OurPortifilio/>
  </div>
</template>
<script>
import OurPortifilio from "@/components/OurPortifilio.vue";
import provideSection from "@/components/provideSection.vue";
import theHeader from "@/components/theHeader.vue";
import WhySection from "@/components/WhySection.vue";
export default {
  components: {
    theHeader,
    provideSection,
    WhySection,
    OurPortifilio
},
};
</script>