<template>
    <div class="col-md-4" @click="switchItem">
        <div class="item-card">
            <div class="card-block">
                <h4 class="card-title">{{item.name}}</h4>
                <div 
                v-for="(value, key, index) in item" 
                :key=key >
                    <div v-if="index < 5">
                        <strong>{{key}}</strong>: {{value}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Item",
        // в пропс передаем все что используется в родителе
        // если мы будем менять passedItem то нам надо его менять  и пересохранить в data, только в prop надо переименовать так как когда будем обращаться чере this он не поймет к чему обращаться 
        props: ['passedItem', 'type'],
        data(){
            return {
                item: {}
            }
        },
        methods: {
            fetchItem(id) {
                fetch(`${this.$parent.url}${this.type}/${id}/`, {
                    method: 'GET'
                })
                    .then(response => response.json())
                    .then(json => this.item = json)
            },
            switchItem(){
                const random_id = Math.floor(Math.random() * 63) + 1;
                this.fetchItem(random_id);
            }
        },
        created(){
            this.item = this.passedItem
        }
    }
</script>