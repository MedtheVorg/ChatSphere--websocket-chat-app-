import { User } from '../models/user.model';

export function createUser(pseudonym: string, sessionId: string) {
    return User.create({ pseudonym, sessionId });
}
