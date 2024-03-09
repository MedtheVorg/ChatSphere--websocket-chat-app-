/* eslint-disable @typescript-eslint/no-explicit-any */
//users

const SERVER_URL =
    import.meta.env.VITE_ENV == 'dev'
        ? import.meta.env.VITE_DEV_URL
        : import.meta.env.VITE_PROD_URL;
// rooms
export async function getRooms() {
    try {
        const response = await fetch(`${SERVER_URL}/rooms`);
        const data = await response.json();
        return data;
    } catch (error: any) {
        console.error(error.message);
    }
}

export async function getMessagesByRoom(roomId: string) {
    try {
        const response = await fetch(`${SERVER_URL}/messages?roomId=${roomId}`);
        const data = await response.json();
        return data;
    } catch (error: any) {
        console.error(error.message);
    }
}
