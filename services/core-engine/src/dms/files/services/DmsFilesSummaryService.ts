import { DmsFilesSummaryModel, DmsFilesSummaryValidator } from "@nexora/types/domains/dms/files/DmsFilesSummary";

export class DmsFilesSummaryService {
  private repository = new Map<string, DmsFilesSummaryModel>();

  public create(data: Omit<DmsFilesSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFilesSummaryModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFilesSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFilesSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFilesSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFilesSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFilesSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFilesSummaryModel>): DmsFilesSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFilesSummaryModel = {
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
