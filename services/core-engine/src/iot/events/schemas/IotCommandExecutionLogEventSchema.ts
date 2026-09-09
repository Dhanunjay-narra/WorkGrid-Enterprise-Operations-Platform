export interface IotCommandExecutionLogEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class IotCommandExecutionLogEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
