import { HrLeaveTaskModel, HrLeaveTaskValidator } from "@nexora/types/domains/hr/leave/HrLeaveTask";

export class HrLeaveTaskService {
  private repository = new Map<string, HrLeaveTaskModel>();

  public create(data: Omit<HrLeaveTaskModel, "id" | "version" | "createdAt" | "updatedAt">): HrLeaveTaskModel {
    const id = "hr_l_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrLeaveTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrLeaveTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrLeaveTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrLeaveTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrLeaveTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrLeaveTaskModel>): HrLeaveTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrLeaveTaskModel = {
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
