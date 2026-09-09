import { CommChannelsTaskModel, CommChannelsTaskValidator } from "@nexora/types/domains/comm/channels/CommChannelsTask";

export class CommChannelsTaskService {
  private repository = new Map<string, CommChannelsTaskModel>();

  public create(data: Omit<CommChannelsTaskModel, "id" | "version" | "createdAt" | "updatedAt">): CommChannelsTaskModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommChannelsTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommChannelsTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommChannelsTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommChannelsTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommChannelsTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommChannelsTaskModel>): CommChannelsTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommChannelsTaskModel = {
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
