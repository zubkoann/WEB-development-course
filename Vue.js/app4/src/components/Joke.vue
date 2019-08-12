<template>
    <div class="col-md-6">
    <div class="joke-card">
        <div class="card-block">
            <button class="close"
                    @click="removeJoke(index)">
                <span>×</span>
            </button>
            <p><u>{{joke.setup}}</u></p>
            <p><em>{{joke.punchline}}</em></p>
        </div>
    </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: "Joke",
        // передаем индекс 
        props: ['joke', 'index'],
        // еужно также примапить так как нет таких методов
        methods: mapActions([
            'removeJoke'
        ])
    }
</script>