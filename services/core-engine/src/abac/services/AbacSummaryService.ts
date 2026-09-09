import { AbacSummaryModel, AbacSummaryValidator } from "@nexora/types/domains/abac/AbacSummary";

export class AbacSummaryService {
  private repository = new Map<string, AbacSummaryModel>();

  public create(data: Omit<AbacSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): AbacSummaryModel {
    const id = "abac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AbacSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AbacSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AbacSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AbacSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AbacSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AbacSummaryModel>): AbacSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AbacSummaryModel = {
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
