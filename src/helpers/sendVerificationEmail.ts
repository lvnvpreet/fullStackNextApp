import { resend } from "@/lib/resend";
import VerificationEmail from "@/emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

eport async functon sendVeericationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse>{
    try {
        
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Mystry message | Verification Code',
            react: VerificationEmail({ username, otp: verifyCode }),
          });

          return {
            success: true,
            message: "Verification email sent successfully",
          }

    } catch (emailError) {
        consle.error(" Error sending verification email ",emailError);
        return {
            success: false,
            message: "Failed to sending verification email",
        };
    }
}
