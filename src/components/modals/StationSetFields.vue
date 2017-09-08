<template>
    <b-form @submit="handleSubmit">
        <b-modal :id="'set-fields-' + station.id" ref="setFields"
                 :title="$t('stations.setFields.title', {stationName: station.stationName})"
                 size="lg"
                 @shown="onShow"
                 @ok="handleOk">

            <b-form-group id="playerNameInputGroup"
                          label-for="playerNameInput"
                          :label="$t('stations.setFields.playerName.label')"
                          :description="$t('stations.setFields.playerName.description')">
                <b-form-input type="text"
                              id="playerNameInput"
                              :placeholder="$t('stations.setFields.playerName.placeholder')"
                              v-model="playerName"></b-form-input>
            </b-form-group>
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
            <template slot="modal-footer">
                <b-button @click="hide" variant="secondary">{{ $t('forms.actions.cancel') }}</b-button>
                <b-button type="submit" variant="primary">{{ $t('forms.actions.submit') }}</b-button>
            </template>
        </b-modal>
    </b-form>
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
                playerName: this.station.playerName,
                currentConsole: this.station.currentConsole,
                currentGame: this.station.currentGame
            };
        },
        methods: {
            show() {
                this.onShow();
                this.$refs.setFields.show();
            },
            onShow() {
                this.playerName = this.station.playerName;
                this.currentConsole = this.station.currentConsole;
                this.currentGame = this.station.currentGame;
            },
            hide() {
                this.$refs.setFields.hide();
            },
            handleOk(e) {
                e.cancel();
                this.handleSubmit();
            },
            handleSubmit(e) {
                if (e) e.preventDefault();
                console.log('Updating fields!');
                this.$socket.emit('update_station_fields', {
                    id: this.station.id,
                    playerName: this.playerName,
                    currentConsole: this.currentConsole,
                    currentGame: this.currentGame
                });
                this.hide();
            }
        }
    };
</script>