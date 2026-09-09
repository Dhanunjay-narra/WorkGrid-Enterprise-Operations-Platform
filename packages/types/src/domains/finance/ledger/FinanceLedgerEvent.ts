export interface FinanceLedgerEventModel {
  id: string;
  tenantId: string;
  code: string;
  name: string;
  domain: "finance_ledger";
  status: "ACTIVE" | "PENDING" | "SUSPENDED" | "ARCHIVED";
  version: number;
  metadata: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export class FinanceLedgerEventValidator {
  public static validate(data: Partial<FinanceLedgerEventModel>): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];
    if (!data.id && data.id !== undefined) errors.push("Invalid identifier");
    if (!data.tenantId && data.tenantId !== undefined) errors.push("Invalid tenant context");
    if (data.version !== undefined && data.version < 1) errors.push("Version must be positive integer");
    return { isValid: errors.length === 0, errors };
  }
}
