import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class Home extends Vue{
    infos: any = [];
    infosChildren: any = [];
    notFound: boolean = false;
    searchString: string = '';

    mounted() {
        return axios
            .get('https://www.breakingbadapi.com/api/characters')
            .then((response) => {
                this.infos = response.data;
                this.infosChildren = response.data;
                return this.infos;
            });
    }

    search(val:any) {
        setTimeout(() => {
            this.infos = this.infosChildren.filter((char: any) => {
                if(!this.removeSpecialCharacters(char.name).includes(this.removeSpecialCharacters(val))) this.notFound = true;
                else this.notFound = false; 
                return (
                    !val || 
                    this.removeSpecialCharacters(char.name).includes(this.removeSpecialCharacters(val))
                ) 
            })
        }, 100);
    };

    removeSpecialCharacters(s: string) {
        s = s ? s.toLowerCase() : '';
        s = s.toLowerCase();
        s = s.replace(new RegExp(/\s/g),'_');
        s = s.replace(new RegExp(/[àáâãäå]/g),'a');
        s = s.replace(new RegExp(/æ/g),'ae');
        s = s.replace(new RegExp(/ç/g),'c');
        s = s.replace(new RegExp(/[èéêë]/g),'e');
        s = s.replace(new RegExp(/[ìíîï]/g),'i');
        s = s.replace(new RegExp(/ñ/g),'n');                
        s = s.replace(new RegExp(/[òóôõö]/g),'o');
        s = s.replace(new RegExp(/œ/g),'oe');
        s = s.replace(new RegExp(/[ùúûü]/g),'u');
        s = s.replace(new RegExp(/[ýÿ]/g),'y');
        s = s.replace(new RegExp(/\W/g),'');
        return s;
    }
}