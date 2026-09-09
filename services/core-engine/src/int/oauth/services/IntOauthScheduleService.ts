import { IntOauthScheduleModel, IntOauthScheduleValidator } from "@nexora/types/domains/int/oauth/IntOauthSchedule";

export class IntOauthScheduleService {
  private repository = new Map<string, IntOauthScheduleModel>();

  public create(data: Omit<IntOauthScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): IntOauthScheduleModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntOauthScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntOauthScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntOauthSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntOauthScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntOauthScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntOauthScheduleModel>): IntOauthScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntOauthScheduleModel = {
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
