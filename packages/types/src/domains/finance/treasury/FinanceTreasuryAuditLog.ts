export interface FinanceTreasuryAuditLogModel {
  id: string;
  tenantId: string;
  code: string;
  name: string;
  domain: "finance_treasury";
  status: "ACTIVE" | "PENDING" | "SUSPENDED" | "ARCHIVED";
  version: number;
  metadata: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export class FinanceTreasuryAuditLogValidator {
  public static validate(data: Partial<FinanceTreasuryAuditLogModel>): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    if (!data.id && data.id !== undefined) errors.push("Invalid identifier");
    if (!data.tenantId && data.tenantId !== undefined) errors.push("Invalid tenant context");
    if (data.version !== undefined && data.version < 1) errors.push("Version must be positive integer");
    return { isValid: errors.length === 0, errors };
  }
}
