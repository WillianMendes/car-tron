class EnvironmentException extends Error {
  private constructor(message: string, stack?: string) {
    super(message);
    this.name = EnvironmentException.name;
    this.message = message;
    this.stack = stack;
  }

  public static isEmpty(key: string): EnvironmentException {
    const message = `The environment variable ${key} is not defined in the environment file.`;
    return new EnvironmentException(message);
  }
}

export default EnvironmentException;
