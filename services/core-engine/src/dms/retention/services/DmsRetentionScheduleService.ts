import { DmsRetentionScheduleModel, DmsRetentionScheduleValidator } from "@nexora/types/domains/dms/retention/DmsRetentionSchedule";

export class DmsRetentionScheduleService {
  private repository = new Map<string, DmsRetentionScheduleModel>();

  public create(data: Omit<DmsRetentionScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): DmsRetentionScheduleModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsRetentionScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsRetentionScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsRetentionSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsRetentionScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsRetentionScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsRetentionScheduleModel>): DmsRetentionScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsRetentionScheduleModel = {
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
