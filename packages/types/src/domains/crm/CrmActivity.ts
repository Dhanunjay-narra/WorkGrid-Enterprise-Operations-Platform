export interface CrmActivityData {
  id: string;
  tenantId: string;
  code: string;
  name: string;
  status: string;
  metadata: Record<string, any>;
  createdAt: string;
  updatedAt: string;
}

export class CrmActivityValidator {
  public static validate(data: Partial<CrmActivityData>): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    if (!data.id && data.id !== undefined) errors.push("Invalid id");
    if (!data.tenantId && data.tenantId !== undefined) errors.push("Invalid tenantId");
    return { isValid: errors.length === 0, errors };
  }
}
