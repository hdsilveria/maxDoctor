<template>
  <div>
    <b-row align-h="center" class="text-center">
      <b-col md="3" class="text-center">
        <icons 
          name="cartIcon"
          class="p-1"
        />
        <p>Facilidade de Compra</p>
      </b-col>

      <b-col md="3" class="text-center">
        <icons 
          name="inventoryIcon"
          class="p-1"
        />
        <p>Quantidade não Limitada</p>
      </b-col>

      <b-col md="3">
        <icons 
          name="truckIcon"
          class="p-1"
        />
        <p>Frete Grátis</p>
      </b-col>
      
      <b-col md="3">
        <icons 
          name="motoIcon"
          class="p-1"
        />
        <p>Agilidade</p>
      </b-col>

      <b-col md="3">
        <icons 
          name="couchIcon"
          class="p-1"
        />
        <p>Comodidade</p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import icons from '../assets/icons/icons.vue'

export default {
  components: {
    icons
  }
}

</script>
