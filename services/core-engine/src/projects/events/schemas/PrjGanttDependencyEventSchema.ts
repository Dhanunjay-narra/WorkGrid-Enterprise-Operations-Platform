export interface PrjGanttDependencyEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class PrjGanttDependencyEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
