import moment from 'moment';

export function formatMessage(username: string, text: string, time?: string) {
    return {
        username,
        text,
        time: time || moment().format('h:mm a'),
    };
}
