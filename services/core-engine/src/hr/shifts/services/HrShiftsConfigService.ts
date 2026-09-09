import { HrShiftsConfigModel, HrShiftsConfigValidator } from "@nexora/types/domains/hr/shifts/HrShiftsConfig";

export class HrShiftsConfigService {
  private repository = new Map<string, HrShiftsConfigModel>();

  public create(data: Omit<HrShiftsConfigModel, "id" | "version" | "createdAt" | "updatedAt">): HrShiftsConfigModel {
    const id = "hr_s_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrShiftsConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrShiftsConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrShiftsConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrShiftsConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrShiftsConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrShiftsConfigModel>): HrShiftsConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrShiftsConfigModel = {
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
