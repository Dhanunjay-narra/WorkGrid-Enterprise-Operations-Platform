export interface AuditAuditLogModel {
  id: string;
  tenantId: string;
  code: string;
  name: string;
  domain: "audit";
  status: "ACTIVE" | "PENDING" | "SUSPENDED" | "ARCHIVED";
  version: number;
  metadata: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export class AuditAuditLogValidator {
  public static validate(data: Partial<AuditAuditLogModel>): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    if (!data.id && data.id !== undefined) errors.push("Invalid identifier");
    if (!data.tenantId && data.tenantId !== undefined) errors.push("Invalid tenant context");
    if (data.version !== undefined && data.version < 1) errors.push("Version must be positive integer");
    return { isValid: errors.length === 0, errors };
  }
}
