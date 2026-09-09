import { CommMessagesScheduleModel, CommMessagesScheduleValidator } from "@nexora/types/domains/comm/messages/CommMessagesSchedule";

export class CommMessagesScheduleService {
  private repository = new Map<string, CommMessagesScheduleModel>();

  public create(data: Omit<CommMessagesScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): CommMessagesScheduleModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommMessagesScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommMessagesScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommMessagesSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommMessagesScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommMessagesScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommMessagesScheduleModel>): CommMessagesScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommMessagesScheduleModel = {
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
