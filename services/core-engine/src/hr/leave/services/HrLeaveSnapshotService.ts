import { HrLeaveSnapshotModel, HrLeaveSnapshotValidator } from "@nexora/types/domains/hr/leave/HrLeaveSnapshot";

export class HrLeaveSnapshotService {
  private repository = new Map<string, HrLeaveSnapshotModel>();

  public create(data: Omit<HrLeaveSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): HrLeaveSnapshotModel {
    const id = "hr_l_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrLeaveSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrLeaveSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrLeaveSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrLeaveSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrLeaveSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrLeaveSnapshotModel>): HrLeaveSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrLeaveSnapshotModel = {
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
