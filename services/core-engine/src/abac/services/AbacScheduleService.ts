import { AbacScheduleModel, AbacScheduleValidator } from "@nexora/types/domains/abac/AbacSchedule";

export class AbacScheduleService {
  private repository = new Map<string, AbacScheduleModel>();

  public create(data: Omit<AbacScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): AbacScheduleModel {
    const id = "abac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AbacScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AbacScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AbacSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AbacScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AbacScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AbacScheduleModel>): AbacScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AbacScheduleModel = {
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
