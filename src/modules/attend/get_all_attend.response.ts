import { CreateAttendRequest } from "./create_attend.request";

export class GetAllAttendResponse {
    reqParams: string | null;
    is_success: boolean;
    rtnMsg: string;
    data: CreateAttendRequest[];
}