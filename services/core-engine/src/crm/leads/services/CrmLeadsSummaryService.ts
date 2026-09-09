import { CrmLeadsSummaryModel, CrmLeadsSummaryValidator } from "@nexora/types/domains/crm/leads/CrmLeadsSummary";

export class CrmLeadsSummaryService {
  private repository = new Map<string, CrmLeadsSummaryModel>();

  public create(data: Omit<CrmLeadsSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): CrmLeadsSummaryModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmLeadsSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmLeadsSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmLeadsSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmLeadsSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmLeadsSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmLeadsSummaryModel>): CrmLeadsSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmLeadsSummaryModel = {
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
