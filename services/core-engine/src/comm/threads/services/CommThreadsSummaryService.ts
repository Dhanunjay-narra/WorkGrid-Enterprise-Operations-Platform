import { CommThreadsSummaryModel, CommThreadsSummaryValidator } from "@nexora/types/domains/comm/threads/CommThreadsSummary";

export class CommThreadsSummaryService {
  private repository = new Map<string, CommThreadsSummaryModel>();

  public create(data: Omit<CommThreadsSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): CommThreadsSummaryModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommThreadsSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommThreadsSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommThreadsSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommThreadsSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommThreadsSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommThreadsSummaryModel>): CommThreadsSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommThreadsSummaryModel = {
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
