import { getModelForClass } from '@typegoose/typegoose';
import { RoomClass } from './room.model';
import { MessageClass } from './message.model';

//https://typegoose.github.io/typegoose/docs/guides/advanced/reference-other-classes/#circular-dependencies
export const Room = getModelForClass(RoomClass);

export const Message = getModelForClass(MessageClass);
