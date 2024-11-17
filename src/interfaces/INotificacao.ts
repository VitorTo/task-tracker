
export enum typeNotification {
    SUCCESS,
    ERROR,
    WARNING,
}

export default interface INotificacao {
    id: number,
    title: string,
    message: string,
    type: typeNotification
}