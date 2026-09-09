import { CommPresenceSummaryModel, CommPresenceSummaryValidator } from "@nexora/types/domains/comm/presence/CommPresenceSummary";

export class CommPresenceSummaryService {
  private repository = new Map<string, CommPresenceSummaryModel>();

  public create(data: Omit<CommPresenceSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): CommPresenceSummaryModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommPresenceSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommPresenceSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommPresenceSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommPresenceSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommPresenceSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommPresenceSummaryModel>): CommPresenceSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommPresenceSummaryModel = {
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
