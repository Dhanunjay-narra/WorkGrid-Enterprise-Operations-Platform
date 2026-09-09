import { RbacSummaryModel, RbacSummaryValidator } from "@nexora/types/domains/rbac/RbacSummary";

export class RbacSummaryService {
  private repository = new Map<string, RbacSummaryModel>();

  public create(data: Omit<RbacSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): RbacSummaryModel {
    const id = "rbac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: RbacSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = RbacSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for RbacSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): RbacSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: RbacSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<RbacSummaryModel>): RbacSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: RbacSummaryModel = {
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
