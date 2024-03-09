import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';

@modelOptions({ schemaOptions: { collection: 'users' } })
export class UserClass {
    @prop({ type: () => String })
    public pseudonym: string;

    @prop({ type: () => String })
    public sessionId: string;
}

export const User = getModelForClass(UserClass);
