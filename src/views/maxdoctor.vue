<template>
  <div>

    <div>
      <b-row align-h="center">
        <b-col md="8" class="text-center bg-light mt-5 content-area p-5" align-self="center">

          <b-row>
            <b-col>
               <logoMaxDoctor />
            </b-col>
          </b-row>

          <b-row class="mt-4">
            <b-col>
              <formMaxDoctor />
            </b-col>
          </b-row>

          <b-row class="mt-4">
            <b-col>
              <iconsMaxDoctor />
            </b-col>
          </b-row>

        </b-col>
      </b-row> <br>
    </div>

  </div>
</template>

<script>

import logoMaxDoctor from '../components/logoMaxDoctor.vue'
import formMaxDoctor from '../components/formMaxDoctor.vue'
import iconsMaxDoctor from '../components/iconsMaxDoctor.vue'

export default {
  components: {
    logoMaxDoctor,
    formMaxDoctor,
    iconsMaxDoctor
  }
}
</script>
