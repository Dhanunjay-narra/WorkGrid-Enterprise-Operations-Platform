import { CommDigestSummaryModel, CommDigestSummaryValidator } from "@nexora/types/domains/comm/digest/CommDigestSummary";

export class CommDigestSummaryService {
  private repository = new Map<string, CommDigestSummaryModel>();

  public create(data: Omit<CommDigestSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): CommDigestSummaryModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommDigestSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommDigestSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommDigestSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommDigestSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommDigestSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommDigestSummaryModel>): CommDigestSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommDigestSummaryModel = {
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
