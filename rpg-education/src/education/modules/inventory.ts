import { RpgPlayer } from '@rpgjs/server'
import { Item } from '@rpgjs/database'


export const createItem = (name: string, description: string='', price: number=0, hp: number=0) => {

    @Item({
        name,
        description: description,
        price: price,
        hpValue: hp,
        hitRate: 1,
        consumable: true,
        addStates: []
    })
    
    class Element {
        onAdd(player: RpgPlayer) {

        }

        onUse(player: RpgPlayer) {

        }

        onUseFailed(player: RpgPlayer) {

        }

        onRemove(player: RpgPlayer) {

        }
    }

    return Element;
};

