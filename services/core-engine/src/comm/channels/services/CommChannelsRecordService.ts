import { CommChannelsRecordModel, CommChannelsRecordValidator } from "@nexora/types/domains/comm/channels/CommChannelsRecord";

export class CommChannelsRecordService {
  private repository = new Map<string, CommChannelsRecordModel>();

  public create(data: Omit<CommChannelsRecordModel, "id" | "version" | "createdAt" | "updatedAt">): CommChannelsRecordModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommChannelsRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommChannelsRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommChannelsRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommChannelsRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommChannelsRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommChannelsRecordModel>): CommChannelsRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommChannelsRecordModel = {
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
