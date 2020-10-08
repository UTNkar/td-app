import SectionImages from './static/images/sections';
import ActivityImages from './static/images/activities';
import SpeechbubbleImages from './static/images/speechbubbles';
import { RekaImages } from './static/images/Reka';
import { FadderkaImages } from './static/images/Fadderka';
import Mediaka from './static/images/Mediaka';

export function getSectionImage(sectionName: string) {
    return SectionImages[sectionName];
}

export function getActivityImage(activity: string) {
    return ActivityImages[activity];
}

export function getSpeechbubbleImage(number: number) {
    return SpeechbubbleImages[number];
}

export function getRekaImage(reka: string) {
    return RekaImages[reka];
}

export function getFadderkaImage(fadderka: string) {
    return FadderkaImages[fadderka];
}

export function getMediakaImage(mediaka: string) {
    console.log(mediaka);
    return Mediaka.find(mediakait => mediakait.name === mediaka).url;
}
