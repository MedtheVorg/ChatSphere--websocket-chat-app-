import { Ref, modelOptions, prop } from '@typegoose/typegoose';
import { UserClass } from './user.model';
import { RoomClass } from './room.model';

@modelOptions({ schemaOptions: { collection: 'messages' } })
export class MessageClass {
    @prop({ type: () => String })
    public content: string;

    @prop({ ref: () => UserClass })
    public author?: Ref<UserClass>;

    @prop({ type: () => String })
    public timestamp?: string;

    @prop({ ref: () => RoomClass })
    public room?: Ref<RoomClass | string>;
}
