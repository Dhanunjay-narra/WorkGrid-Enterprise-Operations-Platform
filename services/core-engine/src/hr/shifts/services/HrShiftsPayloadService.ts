import { HrShiftsPayloadModel, HrShiftsPayloadValidator } from "@nexora/types/domains/hr/shifts/HrShiftsPayload";

export class HrShiftsPayloadService {
  private repository = new Map<string, HrShiftsPayloadModel>();

  public create(data: Omit<HrShiftsPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): HrShiftsPayloadModel {
    const id = "hr_s_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrShiftsPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrShiftsPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrShiftsPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrShiftsPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrShiftsPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrShiftsPayloadModel>): HrShiftsPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrShiftsPayloadModel = {
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
