import { CommChannelsNodeModel, CommChannelsNodeValidator } from "@nexora/types/domains/comm/channels/CommChannelsNode";

export class CommChannelsNodeService {
  private repository = new Map<string, CommChannelsNodeModel>();

  public create(data: Omit<CommChannelsNodeModel, "id" | "version" | "createdAt" | "updatedAt">): CommChannelsNodeModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommChannelsNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommChannelsNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommChannelsNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommChannelsNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommChannelsNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommChannelsNodeModel>): CommChannelsNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommChannelsNodeModel = {
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
