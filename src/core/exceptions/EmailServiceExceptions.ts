class EmailServiceExceptions {
  public EmailServiceException(message: string, causeError: string) {
    return {
      message,
      causeError
    }
  }
}

export { EmailServiceExceptions }