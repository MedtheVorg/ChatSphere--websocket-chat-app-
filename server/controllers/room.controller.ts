import { Request, Response } from 'express';
import { getAllRooms } from '../services/room.service';

/**
 *
 * @method GET _
 * @description Get ALL Rooms
 * @access Public
 */
export async function getRooms(_: Request, res: Response) {
    const rooms = await getAllRooms();
    res.status(200).json(rooms);
}
