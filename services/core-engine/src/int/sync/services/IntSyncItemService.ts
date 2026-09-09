import { IntSyncItemModel, IntSyncItemValidator } from "@nexora/types/domains/int/sync/IntSyncItem";

export class IntSyncItemService {
  private repository = new Map<string, IntSyncItemModel>();

  public create(data: Omit<IntSyncItemModel, "id" | "version" | "createdAt" | "updatedAt">): IntSyncItemModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSyncItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSyncItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSyncItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSyncItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSyncItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSyncItemModel>): IntSyncItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSyncItemModel = {
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
