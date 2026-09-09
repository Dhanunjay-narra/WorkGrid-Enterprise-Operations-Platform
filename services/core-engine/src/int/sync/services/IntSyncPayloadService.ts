import { IntSyncPayloadModel, IntSyncPayloadValidator } from "@nexora/types/domains/int/sync/IntSyncPayload";

export class IntSyncPayloadService {
  private repository = new Map<string, IntSyncPayloadModel>();

  public create(data: Omit<IntSyncPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): IntSyncPayloadModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSyncPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSyncPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSyncPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSyncPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSyncPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSyncPayloadModel>): IntSyncPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSyncPayloadModel = {
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
