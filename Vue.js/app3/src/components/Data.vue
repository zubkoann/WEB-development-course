<template>
    <div class="col-md-12">
        <Item
                v-for="(item, index) in items"
                :key="index"
                :passed-item="item"
                :type="type"

        />
    </div>
    
</template>

<script>
    import Item from './Item'

    export default {
        name: "Data",
        // описываем компонент что используется
        components: {
            Item
        },
        data(){
            return {
                // параметр можно получить из глобального роутера  this.$route.params 
                type: this.$route.params.type,
                items: [],
                url: process.env.VUE_APP_URL
            }
        },
        // вотчер следит за изменением данных, указываем имя свойства за которым следим и пишем функцию которая получает измененное значение
        watch: {
            '$route': 'fetchItems'
        },
        methods: {
            fetchItems(){
                // очищаем чтоб не было задвоения
                this.items = [];
                // пересетываем изменение, остерегаться вокчить данные за которыми следим
                this.type = this.$route.params.type;

                const initial_ids = [1,13,14];

                for(const i in initial_ids) {
                    const id = initial_ids[i];
                    fetch(`${this.url}${this.type}/${id}`, {
                        method: 'GET'
                    })
                        .then(response => response.json() )
                        .then(json => this.items.push(json))
                }
            }
        },
        created(){
            this.fetchItems()
        }
    }
</script>