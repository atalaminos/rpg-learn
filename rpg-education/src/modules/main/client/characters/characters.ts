import { Spritesheet, Presets } from '@rpgjs/client'

const { RMSpritesheet } = Presets

@Spritesheet({
    images: {
        male1_2: require('./assets/personaje.png')
    },
    width: 96,
    height: 128,
    ...RMSpritesheet(3, 4)
})
export class Characters { }