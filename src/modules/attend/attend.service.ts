import { Injectable } from "@nestjs/common";
import { CreateAttendRequest } from "./create_attend.request";
import { AttendType } from "./attend_type.enum";
import { CreateAttendResponse } from "./create_attend.response";
import { GetAllAttendResponse } from "./get_all_attend.response";

@Injectable()
export class AttendService {
    private mockData: CreateAttendRequest[] = [
        {
            ServiceName: 'dwsf.api.commonapi-service',
            saveAttendance: '1',
            EMP_NO: '4005005',
            LGCL_DT: '20260109',
            LGLT_TIME: '162510',
            CRT_DT: '20260109',
            CRT_TIME: '162500',
            ATTEND_TYPE: AttendType.P10,
        },
        {
            ServiceName: 'dwsf.api.commonapi-service',
            saveAttendance: '1',
            EMP_NO: '4005005',
            LGCL_DT: '20260109',
            LGLT_TIME: '181230',
            CRT_DT: '20260109',
            CRT_TIME: '181230',
            ATTEND_TYPE: AttendType.P20,
        },
    ];

    createAttend(request: CreateAttendRequest): CreateAttendResponse {
        this.mockData.push(request);
        return {
            reqParams: JSON.stringify(request),
            is_success: true,
            rtnMsg: 'Attendance record created successfully',
        };
    }

    getAllAttend(): GetAllAttendResponse {
        return {
            reqParams: null,
            is_success: true,
            rtnMsg: 'Fetched all attendance records successfully',
            data: this.mockData,
        }
    }
}