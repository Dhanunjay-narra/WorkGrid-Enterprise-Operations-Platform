import { HrShiftsBatchModel, HrShiftsBatchValidator } from "@nexora/types/domains/hr/shifts/HrShiftsBatch";

export class HrShiftsBatchService {
  private repository = new Map<string, HrShiftsBatchModel>();

  public create(data: Omit<HrShiftsBatchModel, "id" | "version" | "createdAt" | "updatedAt">): HrShiftsBatchModel {
    const id = "hr_s_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrShiftsBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrShiftsBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrShiftsBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrShiftsBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrShiftsBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrShiftsBatchModel>): HrShiftsBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrShiftsBatchModel = {
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
