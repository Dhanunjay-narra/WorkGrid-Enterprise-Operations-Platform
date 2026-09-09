import { IntStripeSummaryModel, IntStripeSummaryValidator } from "@nexora/types/domains/int/stripe/IntStripeSummary";

export class IntStripeSummaryService {
  private repository = new Map<string, IntStripeSummaryModel>();

  public create(data: Omit<IntStripeSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): IntStripeSummaryModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntStripeSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntStripeSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntStripeSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntStripeSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntStripeSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntStripeSummaryModel>): IntStripeSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntStripeSummaryModel = {
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
