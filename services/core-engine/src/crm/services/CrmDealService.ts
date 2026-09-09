import { CrmDealData, CrmDealValidator } from "../../../../packages/types/src/domains/crm/CrmDeal";

export class CrmDealService {
  private repository = new Map<string, CrmDealData>();

  public create(data: Omit<CrmDealData, "id" | "createdAt" | "updatedAt">): CrmDealData {
    const id = "crm_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CrmDealData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmDealValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmDeal: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmDealData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CrmDealData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CrmDealData>): CrmDealData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmDealData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
