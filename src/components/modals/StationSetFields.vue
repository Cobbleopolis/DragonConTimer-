<template>
    <b-modal :id="'set-fields-' + station.id" ref="setFields" :title="$t('stations.setFields.title', {stationName: station.name})">
        <b-form @submit="onSubmit">
            <b-form-group id="consoleSelectGroup"
                          label-for="consoleSelect"
                          :label="$t('stations.setFields.currentConsole.label')"
                          :description="$t('stations.setFields.currentConsole.description')">
                <b-form-select id="consoleSelect"
                               :options="consoleOptions"
                               v-model="currentConsole"></b-form-select>
            </b-form-group>
            <b-form-group id="consoleGameGroup"
                          label-for="currentGame"
                          :label="$t('stations.setFields.currentGame.label')"
                          :description="$t('stations.setFields.currentGame.description')">
                <b-form-input type="text"
                              id="currentGame"
                              :placeholder="$t('stations.setFields.currentGame.placeholder')"
                              v-model="currentGame"></b-form-input>
            </b-form-group>
        </b-form>
    </b-modal>
</template>

<script>
    export default {
        name: 'station-set-fields',
        props: ['station'],
        data() {
            return {
                consoleOptions: this.station.consoleOptions.map(opt => {
                    return {
                        value: opt,
                        text: opt
                    };
                }),
                currentConsole: this.station.currentConsole,
                currentGame: this.station.currentGame
            };
        },
        methods: {
            show() {
                this.$refs.setFields.show();
            },
            hide() {
                this.$refs.setFields.hide();
            },
            onSubmit() {

            }
        }
    };
</script>