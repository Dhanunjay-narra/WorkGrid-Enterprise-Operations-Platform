import { CrmOpportunitySplitData, CrmOpportunitySplitValidator } from "../../../../packages/types/src/domains/crm/CrmOpportunitySplit";

export class CrmOpportunitySplitService {
  private repository = new Map<string, CrmOpportunitySplitData>();

  public create(data: Omit<CrmOpportunitySplitData, "id" | "createdAt" | "updatedAt">): CrmOpportunitySplitData {
    const id = "crm_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CrmOpportunitySplitData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmOpportunitySplitValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmOpportunitySplit: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmOpportunitySplitData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CrmOpportunitySplitData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CrmOpportunitySplitData>): CrmOpportunitySplitData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmOpportunitySplitData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
