import Vue from 'vue';

// insere os components no escopo global do vue

//criar componente através de string
Vue.component('ButtonString', {
    template: '<button @click="click"> Clicked ButtonString {{ count }} times </button>',
    data(){
        return {
            count: 0,
        }
    }, 
    methods:{
        click() {
            this.count++
        }
    }
});

//criar componente através de templatestring
Vue.component('ButtonTemplateString', {
    template: `
        <button @click="click"> Clicked ButtonTemplateString {{ count }} times </button>
    `,
    data(){
        return {
            count: 0,
        }
    }, 
    methods:{
        click() {
            this.count++
        }
    }
});

//criar componente através de xtemplate => definido na index
Vue.component('ButtonXTemplate', {
    template: '#button-x-template',
    data(){
        return {
            count: 0,
        }
    }, 
    methods:{
        click() {
            this.count++
        }
    }
});

//criar componente através de inline => template definido no App.vue
Vue.component('ButtonInline', {
    data(){
        return {
            count: 0,
        }
    }, 
    methods:{
        click() {
            this.count++
        }
    }
});

//criar componente através do render
Vue.component('ButtonRender', {
    data(){
        return {
            count: 0,
        }
    }, 
    methods:{
        click() {
            this.count++
        }
    },
    render(createElement){
        return createElement(
            'button', 
            {
                on: {
                    click: () => this.count++
                }
            },
            [
                `Click ButtonRender ${this.count} times`  
            ]
        );
    }
});

//criar componente através do JSX
Vue.component('ButtonJSX', {
    data(){
        return {
            count: 0,
        }
    }, 
    methods:{
        click() {
            this.count++
        }
    },
    render(){
        return (
            <button onClick={ this.click }>
                Clicked ButtonJSX { this.count } times
            </button>
        )
    }
});
 




