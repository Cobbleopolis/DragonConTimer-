<template>
    <b-card :header="station.stationName" header-tag="h6" class="mb-3" :border-variant="borderVariant"
            :header-border-variant="borderVariant">
        <div class="container-fluid">
            <div class="row mb-1">
                <div class="col-12">
                    <p class="card-text">{{ station }}</p>
                </div>
            </div>
            <div class="row mb-4">
                <div class="col-12">
                    <b-progress :max="max" :value="currentTime" show-value class="mb-3"></b-progress>
                </div>
            </div>
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
                        <b-dropdown-item-button @click="showSetFields">
                            {{ $t('stations.actions.setFields') }}
                        </b-dropdown-item-button>
                        <b-dropdown-item-button @click="randomizeCurrentTime">
                            {{ $t('stations.actions.randomizeTime') }}
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
        data() {
            const MAX_TIME = 3600000
            return {
                max: MAX_TIME,
                currentTime: Math.random() * MAX_TIME | 0
            }
        },
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
            },
            randomizeCurrentTime() {
                this.currentTime = Math.random() * this.max | 0
            }
        }
    };
</script>

<style lang="sass">

</style>