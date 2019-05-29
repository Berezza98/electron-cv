<template>
  <md-tabs class="md-primary" md-alignment="centered" md-sync-route>
    <md-tab v-for="(tab, index) in tabs" :key="index" exact :md-label="tab.title" :md-icon="tab.icon" :to="tab.to"></md-tab>
  </md-tabs>
</template>

<script>
export default {
  data(){
    return {
      tabs : [
        {
          title : 'Загальна інформація',
          icon : 'home',
          to : '/'
        },
        {
          title : 'Базова інформація',
          icon : 'account_box',
          to : '/baseinfo'
        },
        {
          title : 'Освіта',
          icon : 'account_balance',
          to : '/education'
        },
        {
          title : 'Досвід роботи',
          icon : 'work',
          to : '/experience'
        },
        {
          title : 'Курси та сертифікація',
          icon : 'explore',
          to : '/courses'
        },
        {
          title : 'Мовні навички',
          icon : 'library_books',
          to : '/languages'
        },
      ]
    }
  }
}
</script>

<style>
  .item{
    background: red;
    height: 100px;
  }
</style>
