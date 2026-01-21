import { Body, Controller, Get, Post } from "@nestjs/common";
import { AttendService } from "./attend.service";
import { CreateAttendRequest } from "./create_attend.request";

@Controller('api/v1/attend')
export class AttendController {
    constructor(private readonly attendService: AttendService) { }

    @Get()
    getAllAttend() {
        return this.attendService.getAllAttend();
    }

    @Post()
    createAttend(@Body() request: CreateAttendRequest) {
        return this.attendService.createAttend(request);
    };

}       
