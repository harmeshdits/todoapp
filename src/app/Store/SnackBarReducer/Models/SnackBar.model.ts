export class SnackBarModel {
    constructor(
        public body: string,
        public type: NotificationType,
        public id?: number) {
    }
}
export enum NotificationType {
    Success = 1,
    Error=2,
    Warning=3,
    Infomation=4
}