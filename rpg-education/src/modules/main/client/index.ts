import { RpgModule, RpgClient } from '@rpgjs/client'
import { MedievalTilesets } from './maps/medieval'
import Characters from './characters'

@RpgModule<RpgClient>({
    spritesheets: [
        MedievalTilesets,
        ...Characters,
    ],
    sounds: [
    ]
})
export default class RpgClientEngine {}