/* eslint-disable @typescript-eslint/no-explicit-any */
//users
// export function createUser()

// rooms
export async function getRooms() {
    try {
        const response = await fetch('http://localhost:8080/rooms');
        const data = await response.json();
        return data;
    } catch (error: any) {
        console.error(error.message);
    }
}

export async function getMessagesByRoom(roomId: string) {
    try {
        const response = await fetch(
            `http://localhost:8080/messages?roomId=${roomId}`
        );
        const data = await response.json();
        return data;
    } catch (error: any) {
        console.error(error.message);
    }
}
