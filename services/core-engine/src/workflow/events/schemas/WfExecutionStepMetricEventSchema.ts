export interface WfExecutionStepMetricEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class WfExecutionStepMetricEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
