import type { EmailSenderGateway } from "../adapters/EmailSenderGateway";
import type { EmailProps } from "../core/EmailSenderUseCase";
import { SendEmailRequest } from "aws-sdk/clients/ses";
import SES from "aws-sdk/clients/ses";
import { AWSError } from "aws-sdk";
import { EmailServiceExceptions } from "../core/exceptions/EmailServiceExceptions";


class SesEmailSender implements EmailSenderGateway {

  private AmazonSimpleEmailService: SES

  constructor(AmazonSimpleEmailService: SES) {
    this.AmazonSimpleEmailService = AmazonSimpleEmailService
  }

  public sendEmail({ to, subject, body }: EmailProps): void {
    const Request: SendEmailRequest = {
      Source: "mj.58santos@gmail.com",
      Destination: {
        ToAddresses: [to]
      },
      Message: {
        Body: {
          Text: {
            Data: body,
          }
        },
        Subject: {
          Data: subject,
        }
      },
    }
    try {
      this.AmazonSimpleEmailService.sendEmail(Request)
    } catch (error) {

      const awsError = error as AWSError
      const emailError = new EmailServiceExceptions();

      emailError.EmailServiceException("Failure while sending email", awsError.message)

      console.error(emailError)
    }
  }
}