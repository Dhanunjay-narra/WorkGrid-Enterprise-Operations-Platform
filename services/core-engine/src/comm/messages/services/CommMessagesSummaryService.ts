import { CommMessagesSummaryModel, CommMessagesSummaryValidator } from "@nexora/types/domains/comm/messages/CommMessagesSummary";

export class CommMessagesSummaryService {
  private repository = new Map<string, CommMessagesSummaryModel>();

  public create(data: Omit<CommMessagesSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): CommMessagesSummaryModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommMessagesSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommMessagesSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommMessagesSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommMessagesSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommMessagesSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommMessagesSummaryModel>): CommMessagesSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommMessagesSummaryModel = {
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
