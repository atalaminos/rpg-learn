import { RpgEvent, EventData, RpgPlayer, EventMode, Direction } from '@rpgjs/server'
import { CONSTANTS } from './../../../../education/constants';



export function createHuertoEvent(name: string, graphic: string) {

    @EventData({
        name,
        mode: EventMode.Scenario,
        hitbox: {
            width: 32,
            height: 32
        }
    })
    class H1Event extends RpgEvent {
        onInit(player: RpgPlayer) {
            this.changeDirection(Direction.Down)
            this.setGraphic(graphic)
        }

        async onChanges(player: RpgPlayer) {

            const cultivo = player.getVariable(CONSTANTS.HUERTO_CULTIVO);
            const lugar = player.getVariable(CONSTANTS.HUERTO_LUGAR);

            if ((this.name === lugar) && (cultivo) && (lugar)) {
                await this.setGraphic(cultivo);
                await this.changeDirection(Direction.Down);
                player.removeVariable(CONSTANTS.HUERTO_CULTIVO);
                player.removeVariable(CONSTANTS.HUERTO_LUGAR);
            }
        }

        onAction(player: RpgPlayer) {
        }

        onPlayerTouch(player: RpgPlayer) {
        }
    }

    return H1Event;
}