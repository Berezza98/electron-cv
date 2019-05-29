<template>
    <div class="md-layout md-alignment-center-center">
        <div class="md-layout-item md-size-90">
            <md-card md-with-hover>
                <md-ripple>
                    <md-card-header>
                    <div class="md-title">Базова інформація</div>
                    <div class="md-subhead">Загальна інормація про користувача</div>
                    </md-card-header>

                    <md-card-content>
                        <form class="md-layout md-gutter">
                            <div class="md-layout-item md-size-100 md-layout md-alignment-top-center">
                                <div class="md-layout-item md-size-50">
                                    <md-field>
                                        <md-select v-model="language" placeholder="Виберіть мову заповнення резюме">
                                            <md-option v-for="language in availableLanguages" :key="language.id" :value="language.id">{{ language.title }}</md-option>
                                        </md-select>
                                    </md-field>
                                </div>
                            </div>
                            <div class="md-layout-item md-layout md-size-100 md-gutter">
                                <div class="md-layout-item md-size-50">
                                    <md-field>
                                        <label>Ім'я</label>
                                        <md-input v-model="name"></md-input>
                                    </md-field>
                                </div>
                                <div class="md-layout-item md-size-50">
                                    <md-field>
                                        <label>Прізвище</label>
                                        <md-input v-model="surname"></md-input>
                                    </md-field>
                                </div>
                            </div>
                        </form>
                    </md-card-content>

                    <md-card-actions>
                    <md-button>Назад</md-button>
                    <md-button href="#/education">Далі</md-button>
                    </md-card-actions>
                </md-ripple>
            </md-card>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    data(){
        return {

        };
    },
    computed : {
        ...mapState('BaseInfo', [
            'availableLanguages'
        ]),
        language : {
            get(){
                return this.$store.state.BaseInfo.selectedLanguage;
            },
            set(value){
                this.$store.dispatch('BaseInfo/updateSelectedLanguage');
                this.updateSelectedLanguage(value);
            }
        },
        name : {
            get(){
                return this.$store.state.User.name;
            },
            set(value){
                this.$store.dispatch('User/updateUserObj', {key : "name", value});
            }
        },
        surname : {
            get(){
                return this.$store.state.User.surname;
            },
            set(value){
                this.$store.dispatch('User/updateUserObj', {key : "surname", value});
            }
        },
    },
    methods : {
        ...mapActions('BaseInfo', [
            'updateSelectedLanguage'
        ])
    }
}
</script>

<style scoped>
    .md-layout {
        flex-grow: 1;
    }
</style>
