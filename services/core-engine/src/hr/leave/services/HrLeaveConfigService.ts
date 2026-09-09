import { HrLeaveConfigModel, HrLeaveConfigValidator } from "@nexora/types/domains/hr/leave/HrLeaveConfig";

export class HrLeaveConfigService {
  private repository = new Map<string, HrLeaveConfigModel>();

  public create(data: Omit<HrLeaveConfigModel, "id" | "version" | "createdAt" | "updatedAt">): HrLeaveConfigModel {
    const id = "hr_l_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrLeaveConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrLeaveConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrLeaveConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrLeaveConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrLeaveConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrLeaveConfigModel>): HrLeaveConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrLeaveConfigModel = {
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
