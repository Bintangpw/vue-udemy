<template>
    <div class="col-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" v-for="index in 5" :key="index">
                Server #{{ index }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>
