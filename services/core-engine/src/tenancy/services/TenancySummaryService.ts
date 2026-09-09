import { TenancySummaryModel, TenancySummaryValidator } from "@nexora/types/domains/tenancy/TenancySummary";

export class TenancySummaryService {
  private repository = new Map<string, TenancySummaryModel>();

  public create(data: Omit<TenancySummaryModel, "id" | "version" | "createdAt" | "updatedAt">): TenancySummaryModel {
    const id = "tena_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: TenancySummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = TenancySummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for TenancySummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): TenancySummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: TenancySummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<TenancySummaryModel>): TenancySummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: TenancySummaryModel = {
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
