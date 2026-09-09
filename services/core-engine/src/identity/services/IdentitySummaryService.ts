import { IdentitySummaryModel, IdentitySummaryValidator } from "@nexora/types/domains/identity/IdentitySummary";

export class IdentitySummaryService {
  private repository = new Map<string, IdentitySummaryModel>();

  public create(data: Omit<IdentitySummaryModel, "id" | "version" | "createdAt" | "updatedAt">): IdentitySummaryModel {
    const id = "iden_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IdentitySummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdentitySummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdentitySummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdentitySummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IdentitySummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IdentitySummaryModel>): IdentitySummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdentitySummaryModel = {
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
