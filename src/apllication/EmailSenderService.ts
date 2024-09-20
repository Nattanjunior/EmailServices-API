import { EmailSenderUseCase } from "../core/EmailSenderUseCase";

import { EmailProps } from "../core/EmailSenderUseCase";

import { EmailSenderGateway } from "../adapters/EmailSenderGateway";

class EmailSenderService implements EmailSenderUseCase {

  private EmailGateway: EmailSenderGateway;

  constructor(EmailGateway:EmailSenderGateway) {
    this.EmailGateway = EmailGateway
  }

  public sendEmail({ to, subject, body }: EmailProps): Promise<void>{
   this.EmailGateway.sendEmail({
      to,
      subject,
      body
    })

    return Promise.resolve()
  }
}

export { EmailSenderService }