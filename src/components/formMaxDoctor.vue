<template>
<div>

  <b-row class="text-center mt-4" align-h="center">
    <b-col md="6">
      <validation-observer ref="rulesToLogin">
        <b-form
          class="auth-login-form"
          @submit.prevent
        >
      <validation-provider
        v-slot="{ errors, classes }"
        name="CRM"
        rules="required|min:5"
      >
      <b-form-group
        id="fieldset-1"
        label="CRM"
        label-for="input-crm"
      >
      <b-form-input 
        type="number" 
        id="input-crm" 
        placeholder="000000" 
        v-model="crm"
        :class="classes"
        :state="errors.length > 0 ? false:null"
      />
      <small class="text-danger">{{ errors[0] }}</small>
      </b-form-group>
      </validation-provider>

      <validation-provider
        v-slot="{ errors, classes }"
        name="UF"
        rules="required"
      >
      <b-form-group
        id="fieldset-1"
        class="position-relative"
      >
      <label for="input-uf" class="d-block" style="left: 1%;">UF</label>
      <b-form-select 
        type="number" 
        id="input-uf" 
        :options="optUF" 
        v-model="selectd" 
        :class="classes"
        :state="errors.length > 0 ? false:null"
        />
        <small class="text-danger">{{ errors[0] }}</small>
      </b-form-group>
      </validation-provider>

      <b-button variant="primary" class="w-100" @click.prevent="validationForm()">
        CONTINUAR
      </b-button>
      <p class="mt-3">CANAL DE COMPRA EXCLUSIVO PARA CLASSE MÉDICA</p>
      </b-form>
      </validation-observer>
    </b-col>
  </b-row>


</div>
</template>

<script>
import { required, min } from '../@core/utils/validations/index'
import api from '../libs/axios'

export default {

  created(){
    this.getUf()
  },

  data(){
    return {
      required,
      min,
      crm: '',
      selectd: null,
      optUF: [{value: null, text: "Selecione", disabled: true}]
    }
  },

  methods: {
    getUf(){
      api.get('localidades/estados').then(response => {
        response.data.map(arr => this.optUF.push({text: arr.sigla, value: arr.id, disabled: false}))
      })
    },
    validationForm() {
      this.$refs.rulesToLogin.validate().then(success => {
        if (success) {
          alert('Sucesso!')
        } else{
          alert('Erro! Verifique os Campos obrigatórios!')
        }
      })
    },
  }
}
</script>
