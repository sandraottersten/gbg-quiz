<template>
    <div>
        <h1>All time scorer</h1>
        <ol>
            <li v-for="point in allUsers" :key="point.id">
                {{point.name}} {{point.newPoint}}
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
    firebase: {
        allUsers: db.ref('allUsers').orderByChild("newPoint")
    },
}
</script>



