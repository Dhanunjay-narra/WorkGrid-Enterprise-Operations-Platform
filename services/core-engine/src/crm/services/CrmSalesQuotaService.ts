import { CrmSalesQuotaData, CrmSalesQuotaValidator } from "../../../../packages/types/src/domains/crm/CrmSalesQuota";

export class CrmSalesQuotaService {
  private repository = new Map<string, CrmSalesQuotaData>();

  public create(data: Omit<CrmSalesQuotaData, "id" | "createdAt" | "updatedAt">): CrmSalesQuotaData {
    const id = "crm_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CrmSalesQuotaData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmSalesQuotaValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmSalesQuota: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmSalesQuotaData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CrmSalesQuotaData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CrmSalesQuotaData>): CrmSalesQuotaData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmSalesQuotaData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
