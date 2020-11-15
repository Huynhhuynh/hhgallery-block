import Vue from 'vue'
import OwlCarousel from 'vue-owl-carousel'

const MyComponents = { OwlCarousel }

Object.entries( MyComponents ).forEach( ( [ name, component ] ) => {
  Vue.component( name, component )
} )