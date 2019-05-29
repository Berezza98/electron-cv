<template>
    <md-button @click="createCV()">Створити резюме</md-button>
</template>

<script>
import pug from 'pug';
import path from 'path';
import htmlPdf from 'html-pdf';

const { dialog } = require('electron').remote;

export default {
    data(){
        return {
            person : {
                css: path.resolve(path.join(__dirname, '../../store/pdf-templates/css/blue.css')),
                name: 'Roman',
                surname: 'Berezdetskyi',
                email: '',
                phone: '',
                city: '',
                birthday: '',
                dopblock: '',
                position: '',
                aboutme: '',
                hobby: [],
                achievement: [{ title: "", description: "", year: "" }],
                other: [{ title: "", description: "" }],
                lang: [{ language: "", level: "", description: "" }],
                skills: [{ skill: "", level: "", description: "" }],
                courses: [{ school: "", name: "", year: "" }],
                education: [{ name: "", start: "2008", finish: "2023", level: "1", facult: "", spec: "", gpamid: "", gpatotal: "" }],
                experience: [{ name: "", position: "", department: "", monthstart: "1", monthfinish: "1", yearstart: "2005", yearfinish: "2016", duties: "" }],
                letter: '',
                acdegrees: '',
                langlevels: '',
                languages: '',
                certificates: [{name: "", certdate: "", description: ""}]
                //certificates: objectFromBD.certificates > 0 ? objectFromBD.certificates : [{name: "TTTT", certdate: "01/01/2015", description: "aaaa000aa"}]
            }
        }
    },
    methods : {
        createCV(){
            let html = pug.renderFile(path.join(__dirname, '../../store/pdf-templates' ,'index.pug'), this.person);
            dialog.showSaveDialog((filename) => {
                htmlPdf.create(html).toFile(filename ,function(err, res){
                    console.log('DONE!');
                });
            });
        }
    }
}
</script>

<style scoped>

</style>
