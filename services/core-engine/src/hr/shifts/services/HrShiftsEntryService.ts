import { HrShiftsEntryModel, HrShiftsEntryValidator } from "@nexora/types/domains/hr/shifts/HrShiftsEntry";

export class HrShiftsEntryService {
  private repository = new Map<string, HrShiftsEntryModel>();

  public create(data: Omit<HrShiftsEntryModel, "id" | "version" | "createdAt" | "updatedAt">): HrShiftsEntryModel {
    const id = "hr_s_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrShiftsEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrShiftsEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrShiftsEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrShiftsEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrShiftsEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrShiftsEntryModel>): HrShiftsEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrShiftsEntryModel = {
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
