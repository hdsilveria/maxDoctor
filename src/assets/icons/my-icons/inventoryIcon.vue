<template>
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 :width="width" :height="height" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
:fill="color" stroke="none">
<path d="M1390 3950 l0 -1170 1225 0 1225 0 0 1170 0 1170 -1225 0 -1225 0 0
-1170z m1890 335 l0 -165 -665 0 -665 0 0 165 0 165 665 0 665 0 0 -165z"/>
<path d="M60 1225 l0 -1225 1165 0 1165 0 0 1225 0 1225 -1165 0 -1165 0 0
-1225z m1780 390 l0 -165 -615 0 -615 0 0 165 0 165 615 0 615 0 0 -165z"/>
<path d="M2730 1225 l0 -1225 1165 0 1165 0 0 1225 0 1225 -1165 0 -1165 0 0
-1225z m1780 390 l0 -165 -615 0 -615 0 0 165 0 165 615 0 615 0 0 -165z"/>
</g>
</svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '',
    },
  },
}
</script>