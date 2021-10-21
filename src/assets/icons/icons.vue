<template>
  <div>
    <component
      :is="name"
      :color="color"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script>

import cartIcon from './my-icons/cartIcon.vue'
import couchIcon from './my-icons/couchIcon.vue'
import inventoryIcon from './my-icons/inventoryIcon.vue'
import motoIcon from './my-icons/motoIcon.vue'
import truckIcon from './my-icons/truckIcon.vue'

export default {
  components: {
    cartIcon,
    couchIcon,
    inventoryIcon,
    motoIcon,
    truckIcon
  },

  props: {
  name: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: '40px',
  },
  height: {
    type: String,
    default: '40px',
  },
  color: {
    type: String,
    default: 'rgb(122, 73, 168)',
  },
},
}
</script>
