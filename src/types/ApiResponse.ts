import { Message } from "@/model/user.model";

export interface ApiResponse {
    success: boolean;
    message: string;
    isAccesptingMessages?: boolean;
    messages?: Array<Message>;

}