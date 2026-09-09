import { CommPresenceScheduleModel, CommPresenceScheduleValidator } from "@nexora/types/domains/comm/presence/CommPresenceSchedule";

export class CommPresenceScheduleService {
  private repository = new Map<string, CommPresenceScheduleModel>();

  public create(data: Omit<CommPresenceScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): CommPresenceScheduleModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommPresenceScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommPresenceScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommPresenceSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommPresenceScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommPresenceScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommPresenceScheduleModel>): CommPresenceScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommPresenceScheduleModel = {
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
