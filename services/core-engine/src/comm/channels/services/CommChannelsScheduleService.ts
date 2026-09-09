import { CommChannelsScheduleModel, CommChannelsScheduleValidator } from "@nexora/types/domains/comm/channels/CommChannelsSchedule";

export class CommChannelsScheduleService {
  private repository = new Map<string, CommChannelsScheduleModel>();

  public create(data: Omit<CommChannelsScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): CommChannelsScheduleModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommChannelsScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommChannelsScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommChannelsSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommChannelsScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommChannelsScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommChannelsScheduleModel>): CommChannelsScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommChannelsScheduleModel = {
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
