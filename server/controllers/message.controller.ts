import { Request, Response } from 'express';
import { getMessagesByRoom } from '../services/message.service';

/**
 *
 * @method GET _
 * @description Get ALL Messages
 * @access Public
 */
export async function getMessages(
    req: Request<{}, {}, {}, { roomId: string }>,
    res: Response
) {
    const { roomId } = req.query;
    const messages = await getMessagesByRoom(roomId);
    res.status(200).json(messages);
}
