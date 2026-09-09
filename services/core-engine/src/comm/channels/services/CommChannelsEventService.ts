import { CommChannelsEventModel, CommChannelsEventValidator } from "@nexora/types/domains/comm/channels/CommChannelsEvent";

export class CommChannelsEventService {
  private repository = new Map<string, CommChannelsEventModel>();

  public create(data: Omit<CommChannelsEventModel, "id" | "version" | "createdAt" | "updatedAt">): CommChannelsEventModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommChannelsEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommChannelsEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommChannelsEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommChannelsEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommChannelsEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommChannelsEventModel>): CommChannelsEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommChannelsEventModel = {
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
