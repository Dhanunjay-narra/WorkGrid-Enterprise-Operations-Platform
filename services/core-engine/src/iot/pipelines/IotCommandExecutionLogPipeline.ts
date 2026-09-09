export class IotCommandExecutionLogPipeline {
  public transformInbound(rawInput: Record<string, any>): Record<string, any> {
    const sanitized: Record<string, any> = {};
    for (const [key, val] of Object.entries(rawInput)) {
      if (typeof val === "string") {
        sanitized[key] = val.trim();
      } else {
        sanitized[key] = val;
      }
    }
    sanitized.sanitizedAt = new Date().toISOString();
    return sanitized;
  }

  public transformOutbound(entityRecord: Record<string, any>): Record<string, any> {
    const output = { ...entityRecord };
    delete output.internalHash;
    return output;
  }
}
