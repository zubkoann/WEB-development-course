// локальный миксин
export default {
    // должен быть обьект который полность соответсвтвует созданному обьекту в компоненте
    data() {
        return {
            isShowing: false
        }
    },
    methods: {
        toggleShow() {
            this.isShowing = !this.isShowing;
        },
        sayHello: function () {
            console.log('hello from mixin! ' + this.title)
        }
    },
    mounted() {
        this.sayHello()
    }
}