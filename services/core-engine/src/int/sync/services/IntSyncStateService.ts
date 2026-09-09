import { IntSyncStateModel, IntSyncStateValidator } from "@nexora/types/domains/int/sync/IntSyncState";

export class IntSyncStateService {
  private repository = new Map<string, IntSyncStateModel>();

  public create(data: Omit<IntSyncStateModel, "id" | "version" | "createdAt" | "updatedAt">): IntSyncStateModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSyncStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSyncStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSyncState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSyncStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSyncStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSyncStateModel>): IntSyncStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSyncStateModel = {
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
