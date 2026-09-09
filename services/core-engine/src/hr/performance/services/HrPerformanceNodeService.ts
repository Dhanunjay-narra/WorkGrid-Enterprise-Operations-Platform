import { HrPerformanceNodeModel, HrPerformanceNodeValidator } from "@nexora/types/domains/hr/performance/HrPerformanceNode";

export class HrPerformanceNodeService {
  private repository = new Map<string, HrPerformanceNodeModel>();

  public create(data: Omit<HrPerformanceNodeModel, "id" | "version" | "createdAt" | "updatedAt">): HrPerformanceNodeModel {
    const id = "hr_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrPerformanceNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrPerformanceNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrPerformanceNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrPerformanceNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrPerformanceNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrPerformanceNodeModel>): HrPerformanceNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrPerformanceNodeModel = {
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
