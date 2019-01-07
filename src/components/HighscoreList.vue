<template>
    <div>
        <h1>All time scorer</h1>
        <ol>
            <li v-for="point in allUsers" :key="point.id">
                {{point.user}} {{point.newPoint}}
            </li>
        </ol>
    </div>
</template>

<script>
import {db} from '../firebase-config'

export default {
    name: 'HighscoreList',
    data () {
        return {
            newPoint: ''
        }
    },
    created () {
        this.$bindAsArray('allUsers', db.ref('allUsers'))
    },
    firebase: {
        allUsers: db.ref('allUsers')
    }
}
</script>