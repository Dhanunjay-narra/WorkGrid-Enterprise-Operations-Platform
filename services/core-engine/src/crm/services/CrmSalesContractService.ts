import { CrmSalesContractData, CrmSalesContractValidator } from "../../../../packages/types/src/domains/crm/CrmSalesContract";

export class CrmSalesContractService {
  private repository = new Map<string, CrmSalesContractData>();

  public create(data: Omit<CrmSalesContractData, "id" | "createdAt" | "updatedAt">): CrmSalesContractData {
    const id = "crm_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CrmSalesContractData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmSalesContractValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmSalesContract: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmSalesContractData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CrmSalesContractData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CrmSalesContractData>): CrmSalesContractData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmSalesContractData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
