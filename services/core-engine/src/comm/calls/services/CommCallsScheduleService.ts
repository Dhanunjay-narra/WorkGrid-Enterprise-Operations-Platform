import { CommCallsScheduleModel, CommCallsScheduleValidator } from "@nexora/types/domains/comm/calls/CommCallsSchedule";

export class CommCallsScheduleService {
  private repository = new Map<string, CommCallsScheduleModel>();

  public create(data: Omit<CommCallsScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): CommCallsScheduleModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommCallsScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommCallsScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommCallsSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommCallsScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommCallsScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommCallsScheduleModel>): CommCallsScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommCallsScheduleModel = {
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
