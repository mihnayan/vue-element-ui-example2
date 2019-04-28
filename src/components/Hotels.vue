<template>
    <ul>
        <li v-for="hotel in $store.state.hotels">
            {{ hotel.name }} - {{ hotel.cost }}
        </li>
    </ul>
</template>
