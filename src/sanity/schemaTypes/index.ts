import { aboutType } from './aboutType'
import { callToActionType } from './callToActionType'
import { homeType } from './homeType'
import { personType } from './personType'
import {postType} from './postType'
import { settingsType } from './settings'
import { socialLinkType } from './socialLinkType'
import { tagsType } from './tagsType'
import { tagType } from './tagType'

export const schema = [
    postType, 
    settingsType, 
    homeType, 
    aboutType,
    socialLinkType,
    callToActionType,
    tagsType,
    tagType,
    personType
]