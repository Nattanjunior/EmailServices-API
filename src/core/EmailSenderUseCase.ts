// casos de uso, contrato

export interface EmailProps {
  to: string,
  subject: string,
  body: string
}

class EmailSenderUseCase {
  async sendEmail({ to, subject, body }: EmailProps): Promise<void> { }
}

export { EmailSenderUseCase }