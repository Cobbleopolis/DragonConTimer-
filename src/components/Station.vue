<template>
    <b-card :header="station.name" header-tag="h6" class="mb-3" :border-variant="borderVariant" :header-border-variant="borderVariant">
        <p class="card-text">{{ station }}</p>
        <div class="text-right">
            <b-dropdown :text="$t('station.actions.title')" class="text-right" variant="primary">
                <b-dropdown-item-button></b-dropdown-item-button>
            </b-dropdown>
        </div>
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