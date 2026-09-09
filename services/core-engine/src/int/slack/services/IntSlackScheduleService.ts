import { IntSlackScheduleModel, IntSlackScheduleValidator } from "@nexora/types/domains/int/slack/IntSlackSchedule";

export class IntSlackScheduleService {
  private repository = new Map<string, IntSlackScheduleModel>();

  public create(data: Omit<IntSlackScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): IntSlackScheduleModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSlackScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSlackScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSlackSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSlackScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSlackScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSlackScheduleModel>): IntSlackScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSlackScheduleModel = {
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
