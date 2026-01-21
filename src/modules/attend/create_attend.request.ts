import {
    IsNotEmpty,
    IsString,
    Length,
    IsEnum,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { AttendType } from './attend_type.enum';

export class CreateAttendRequest {

    @ApiProperty({
        example: 'dwsf.api.commonapi-service',
        default: 'dwsf.api.commonapi-service',
    })
    @IsString()
    @IsNotEmpty()
    ServiceName: string = 'dwsf.api.commonapi-service';

    @ApiProperty({ example: '1' })
    @IsString()
    @IsNotEmpty()
    saveAttendance: string;

    @ApiProperty({
        example: '4005005',
        description: '사원 번호 (7~10자리 숫자)',
    })
    @IsString()
    @Length(7, 10)
    EMP_NO: string;

    @ApiProperty({ example: '20260109' })
    @IsString()
    @Length(8, 8)
    LGCL_DT: string;

    @ApiProperty({ example: '162510' })
    @IsString()
    @Length(6, 6)
    LGLT_TIME: string;

    @ApiProperty({ example: '20260109' })
    @IsString()
    @Length(8, 8)
    CRT_DT: string;

    @ApiProperty({ example: '162500' })
    @IsString()
    @Length(6, 6)
    CRT_TIME: string;

    @ApiProperty({
        enum: AttendType,
        example: AttendType.P10,
    })
    @IsEnum(AttendType)
    ATTEND_TYPE: AttendType;
}
