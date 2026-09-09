import { HrPerformancePayloadModel, HrPerformancePayloadValidator } from "@nexora/types/domains/hr/performance/HrPerformancePayload";

export class HrPerformancePayloadService {
  private repository = new Map<string, HrPerformancePayloadModel>();

  public create(data: Omit<HrPerformancePayloadModel, "id" | "version" | "createdAt" | "updatedAt">): HrPerformancePayloadModel {
    const id = "hr_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrPerformancePayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrPerformancePayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrPerformancePayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrPerformancePayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrPerformancePayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrPerformancePayloadModel>): HrPerformancePayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrPerformancePayloadModel = {
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
