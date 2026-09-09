import { HrShiftsEventModel, HrShiftsEventValidator } from "@nexora/types/domains/hr/shifts/HrShiftsEvent";

export class HrShiftsEventService {
  private repository = new Map<string, HrShiftsEventModel>();

  public create(data: Omit<HrShiftsEventModel, "id" | "version" | "createdAt" | "updatedAt">): HrShiftsEventModel {
    const id = "hr_s_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrShiftsEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrShiftsEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrShiftsEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrShiftsEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrShiftsEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrShiftsEventModel>): HrShiftsEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrShiftsEventModel = {
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
