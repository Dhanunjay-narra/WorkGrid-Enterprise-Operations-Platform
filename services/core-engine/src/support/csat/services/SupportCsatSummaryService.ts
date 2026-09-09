import { SupportCsatSummaryModel, SupportCsatSummaryValidator } from "@nexora/types/domains/support/csat/SupportCsatSummary";

export class SupportCsatSummaryService {
  private repository = new Map<string, SupportCsatSummaryModel>();

  public create(data: Omit<SupportCsatSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): SupportCsatSummaryModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportCsatSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportCsatSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportCsatSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportCsatSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportCsatSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportCsatSummaryModel>): SupportCsatSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportCsatSummaryModel = {
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
