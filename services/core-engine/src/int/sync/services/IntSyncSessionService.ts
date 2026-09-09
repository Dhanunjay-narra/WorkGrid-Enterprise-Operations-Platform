import { IntSyncSessionModel, IntSyncSessionValidator } from "@nexora/types/domains/int/sync/IntSyncSession";

export class IntSyncSessionService {
  private repository = new Map<string, IntSyncSessionModel>();

  public create(data: Omit<IntSyncSessionModel, "id" | "version" | "createdAt" | "updatedAt">): IntSyncSessionModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSyncSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSyncSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSyncSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSyncSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSyncSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSyncSessionModel>): IntSyncSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSyncSessionModel = {
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
