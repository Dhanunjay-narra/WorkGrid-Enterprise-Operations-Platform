export interface InvItemCategoryEventPayload {
  id: string;
  tenantId: string;
  code: string;
  timestamp: string;
}

export class InvItemCategoryEventSchema {
  public static validate(payload: any): boolean {
    return Boolean(payload && payload.id && payload.tenantId);
  }
}
