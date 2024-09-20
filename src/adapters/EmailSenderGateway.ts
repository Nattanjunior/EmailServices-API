import { EmailProps } from "../core/EmailSenderUseCase";

class EmailSenderGateway {
  sendEmail({ to, subject, body }: EmailProps) { }
}

export { EmailSenderGateway }