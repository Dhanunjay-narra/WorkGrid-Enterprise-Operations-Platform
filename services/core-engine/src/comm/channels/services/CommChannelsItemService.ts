import { CommChannelsItemModel, CommChannelsItemValidator } from "@nexora/types/domains/comm/channels/CommChannelsItem";

export class CommChannelsItemService {
  private repository = new Map<string, CommChannelsItemModel>();

  public create(data: Omit<CommChannelsItemModel, "id" | "version" | "createdAt" | "updatedAt">): CommChannelsItemModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommChannelsItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommChannelsItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommChannelsItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommChannelsItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommChannelsItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommChannelsItemModel>): CommChannelsItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommChannelsItemModel = {
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
