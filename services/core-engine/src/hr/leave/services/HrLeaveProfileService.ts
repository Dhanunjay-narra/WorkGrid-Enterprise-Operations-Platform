import { HrLeaveProfileModel, HrLeaveProfileValidator } from "@nexora/types/domains/hr/leave/HrLeaveProfile";

export class HrLeaveProfileService {
  private repository = new Map<string, HrLeaveProfileModel>();

  public create(data: Omit<HrLeaveProfileModel, "id" | "version" | "createdAt" | "updatedAt">): HrLeaveProfileModel {
    const id = "hr_l_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrLeaveProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrLeaveProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrLeaveProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrLeaveProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrLeaveProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrLeaveProfileModel>): HrLeaveProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrLeaveProfileModel = {
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
