import { HrLeaveStateModel, HrLeaveStateValidator } from "@nexora/types/domains/hr/leave/HrLeaveState";

export class HrLeaveStateService {
  private repository = new Map<string, HrLeaveStateModel>();

  public create(data: Omit<HrLeaveStateModel, "id" | "version" | "createdAt" | "updatedAt">): HrLeaveStateModel {
    const id = "hr_l_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrLeaveStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrLeaveStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrLeaveState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrLeaveStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrLeaveStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrLeaveStateModel>): HrLeaveStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrLeaveStateModel = {
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
