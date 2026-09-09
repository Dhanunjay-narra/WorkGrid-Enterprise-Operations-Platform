import { IntSyncScheduleModel, IntSyncScheduleValidator } from "@nexora/types/domains/int/sync/IntSyncSchedule";

export class IntSyncScheduleService {
  private repository = new Map<string, IntSyncScheduleModel>();

  public create(data: Omit<IntSyncScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): IntSyncScheduleModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSyncScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSyncScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSyncSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSyncScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSyncScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSyncScheduleModel>): IntSyncScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSyncScheduleModel = {
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
