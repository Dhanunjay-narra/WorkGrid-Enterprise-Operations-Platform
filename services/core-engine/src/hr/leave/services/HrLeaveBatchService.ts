import { HrLeaveBatchModel, HrLeaveBatchValidator } from "@nexora/types/domains/hr/leave/HrLeaveBatch";

export class HrLeaveBatchService {
  private repository = new Map<string, HrLeaveBatchModel>();

  public create(data: Omit<HrLeaveBatchModel, "id" | "version" | "createdAt" | "updatedAt">): HrLeaveBatchModel {
    const id = "hr_l_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrLeaveBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrLeaveBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrLeaveBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrLeaveBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrLeaveBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrLeaveBatchModel>): HrLeaveBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrLeaveBatchModel = {
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
