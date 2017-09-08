<template>
    <b-card :header="station.name" header-tag="h6" class="mb-3" :border-variant="borderVariant" :header-border-variant="borderVariant">
        <p class="card-text">{{ station }}</p>
        <div class="text-right">
            <b-dropdown :text="$t('stations.actions.title')" class="text-right" variant="primary">
                <b-dropdown-item-button @click="showSetFields">{{ $t('stations.actions.setFields') }}</b-dropdown-item-button>
            </b-dropdown>
        </div>
        <station-set-fields ref="setFieldsModal" :station="station"></station-set-fields>
    </b-card>
</template>

<script>
    import StationSetFields from './modals/StationSetFields.vue';

    export default {
        components: {StationSetFields},
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
        },
        methods: {
            showSetFields() {
                this.$refs.setFieldsModal.show()
            }
        }
    }
</script>