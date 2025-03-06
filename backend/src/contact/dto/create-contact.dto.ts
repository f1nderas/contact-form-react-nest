import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class CreateContactDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsString()
    phone: string

    @IsNotEmpty()
    @IsString()
    projectType: string

    @IsNotEmpty()
    @IsString()
    projectDescription: string

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    budgetMin: number

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    budgetMax: number
}