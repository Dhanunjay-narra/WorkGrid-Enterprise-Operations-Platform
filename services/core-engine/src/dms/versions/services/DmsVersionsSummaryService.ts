import { DmsVersionsSummaryModel, DmsVersionsSummaryValidator } from "@nexora/types/domains/dms/versions/DmsVersionsSummary";

export class DmsVersionsSummaryService {
  private repository = new Map<string, DmsVersionsSummaryModel>();

  public create(data: Omit<DmsVersionsSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): DmsVersionsSummaryModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsVersionsSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsVersionsSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsVersionsSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsVersionsSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsVersionsSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsVersionsSummaryModel>): DmsVersionsSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsVersionsSummaryModel = {
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
