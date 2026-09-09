import { RbacMetricModel, RbacMetricValidator } from "@nexora/types/domains/rbac/RbacMetric";

export class RbacMetricService {
  private repository = new Map<string, RbacMetricModel>();

  public create(data: Omit<RbacMetricModel, "id" | "version" | "createdAt" | "updatedAt">): RbacMetricModel {
    const id = "rbac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: RbacMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = RbacMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for RbacMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): RbacMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: RbacMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<RbacMetricModel>): RbacMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: RbacMetricModel = {
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
