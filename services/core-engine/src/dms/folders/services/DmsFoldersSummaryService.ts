import { DmsFoldersSummaryModel, DmsFoldersSummaryValidator } from "@nexora/types/domains/dms/folders/DmsFoldersSummary";

export class DmsFoldersSummaryService {
  private repository = new Map<string, DmsFoldersSummaryModel>();

  public create(data: Omit<DmsFoldersSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFoldersSummaryModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFoldersSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFoldersSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFoldersSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFoldersSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFoldersSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFoldersSummaryModel>): DmsFoldersSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFoldersSummaryModel = {
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
