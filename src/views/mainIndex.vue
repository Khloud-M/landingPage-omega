<template>
  <div>
    <theHeader />
    <provideSection />
    <WhySection/>
  </div>
</template>
<script>
import provideSection from "@/components/provideSection.vue";
import theHeader from "@/components/theHeader.vue";
import WhySection from "@/components/WhySection.vue";
export default {
  components: {
    theHeader,
    provideSection,
    WhySection
},
};
</script>