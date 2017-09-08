<template>
    <b-card :header="station.stationName" header-tag="h6" class="mb-3" :border-variant="borderVariant"
            :header-border-variant="borderVariant">
        <p class="card-text">{{ station }}</p>
        <div class="">
            <b-form inline class="row justify-content-between">
                <b-form-group id="playerNameInputGroup"
                              class="col-auto"
                              label-for="playerNameInput"
                              :label="$t('stations.fields.playerName.label')"
                              horizontal>
                    <b-form-input type="text"
                                  id="playerNameInput"
                                  readonly
                                  v-model="station.playerName"></b-form-input>
                </b-form-group>
                <b-form-group id="currentConsoleInputGroup"
                              class="col-auto"
                              label-for="currentConsoleInput"
                              :label="$t('stations.fields.currentConsole.label')"
                              horizontal>
                    <b-form-input type="text"
                                  id="currentConsoleInput"
                                  readonly
                                  v-model="station.currentConsole"></b-form-input>
                </b-form-group>
                <b-form-group id="currentGameInputGroup"
                              class="col-auto mr-auto"
                              label-for="currentGameInput"
                              :label="$t('stations.fields.currentGame.label')"
                              horizontal>
                    <b-form-input type="text"
                                  id="currentGameInput"
                                  readonly
                                  v-model="station.currentGame"></b-form-input>
                </b-form-group>
                <div class="col-auto">
                    <b-dropdown :text="$t('stations.actions.title')" class="float-right" variant="primary">
                        <b-dropdown-item-button @click="showSetFields">{{ $t('stations.actions.setFields') }}
                        </b-dropdown-item-button>
                    </b-dropdown>
                </div>
            </b-form>
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
                switch (this.station.status) {
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
                this.$refs.setFieldsModal.show();
            }
        }
    };
</script>

<style lang="sass">

</style>