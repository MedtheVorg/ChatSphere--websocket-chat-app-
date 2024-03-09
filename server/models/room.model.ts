import {
    Ref,
    modelOptions,
    prop,
} from '@typegoose/typegoose';
import { MessageClass } from './message.model';

@modelOptions({ schemaOptions: { collection: 'rooms' } })
export class RoomClass {
    @prop({ type: () => String })
    public name: string;

    @prop({ ref: () => MessageClass })
    public messages?: Ref<MessageClass>[];
}
