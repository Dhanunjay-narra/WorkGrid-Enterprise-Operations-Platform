export interface SupArticleCategoryEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class SupArticleCategoryEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
