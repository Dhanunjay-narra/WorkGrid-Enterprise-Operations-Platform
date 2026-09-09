import { DmsChunksSummaryModel, DmsChunksSummaryValidator } from "@nexora/types/domains/dms/chunks/DmsChunksSummary";

export class DmsChunksSummaryService {
  private repository = new Map<string, DmsChunksSummaryModel>();

  public create(data: Omit<DmsChunksSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): DmsChunksSummaryModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsChunksSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsChunksSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsChunksSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsChunksSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsChunksSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsChunksSummaryModel>): DmsChunksSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsChunksSummaryModel = {
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
