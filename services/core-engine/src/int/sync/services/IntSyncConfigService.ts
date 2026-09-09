import { IntSyncConfigModel, IntSyncConfigValidator } from "@nexora/types/domains/int/sync/IntSyncConfig";

export class IntSyncConfigService {
  private repository = new Map<string, IntSyncConfigModel>();

  public create(data: Omit<IntSyncConfigModel, "id" | "version" | "createdAt" | "updatedAt">): IntSyncConfigModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSyncConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSyncConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSyncConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSyncConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSyncConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSyncConfigModel>): IntSyncConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSyncConfigModel = {
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
