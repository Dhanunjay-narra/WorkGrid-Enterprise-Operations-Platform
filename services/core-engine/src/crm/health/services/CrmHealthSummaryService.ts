import { CrmHealthSummaryModel, CrmHealthSummaryValidator } from "@nexora/types/domains/crm/health/CrmHealthSummary";

export class CrmHealthSummaryService {
  private repository = new Map<string, CrmHealthSummaryModel>();

  public create(data: Omit<CrmHealthSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): CrmHealthSummaryModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmHealthSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmHealthSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmHealthSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmHealthSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmHealthSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmHealthSummaryModel>): CrmHealthSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmHealthSummaryModel = {
      ...existing,
      ...updates,
      version: existing.version + 1,
      updatedAt: new Date().toISOString()
    };
    this.repository.set(id, updated);
    return updated;
  }

  public remove(id: string): boolean {
    return this.repository.delete(id);
  }
}
