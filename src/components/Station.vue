<template>
    <b-card :header="station.name" header-tag="h6" class="mb-3" :border-variant="borderVariant" :header-border-variant="borderVariant">
        <p class="card-text">{{ station }}</p>
    </b-card>
</template>

<script>
    export default {
        name: 'station',
        props: ['station'],
        computed: {
            borderVariant() {
                switch(this.station.status) {
                    case 'DEFAULT':
                        return 'default';
                        break;
                    default:
                        return 'default';
                        break;
                }
            }
        }
    }
</script>