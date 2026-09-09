import { CommPresenceItemModel, CommPresenceItemValidator } from "@nexora/types/domains/comm/presence/CommPresenceItem";

export class CommPresenceItemService {
  private repository = new Map<string, CommPresenceItemModel>();

  public create(data: Omit<CommPresenceItemModel, "id" | "version" | "createdAt" | "updatedAt">): CommPresenceItemModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommPresenceItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommPresenceItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommPresenceItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommPresenceItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommPresenceItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommPresenceItemModel>): CommPresenceItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommPresenceItemModel = {
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
