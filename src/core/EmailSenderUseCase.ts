// casos de uso, contrato

interface EmailProps {
  to: string,
  subject: string,
  body: string
}

class EmailSenderUseCase {
  async sendEmail({ to, subject, body }: EmailProps) { }
}