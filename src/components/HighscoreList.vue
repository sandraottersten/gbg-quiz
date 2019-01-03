<template>
    <div>
        <h1>All time scorer</h1>
        <ul>
            <li v-for="point in allUsers" :key="point.id">
                {{point}}
            </li>
        </ul>
    </div>
</template>

<script>
import {db} from '../firebase-config'

export default {
    name: 'HighscoreList',
    data () {
        return {
            point: ''
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
