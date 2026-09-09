import { IntMappingsSnapshotModel, IntMappingsSnapshotValidator } from "@nexora/types/domains/int/mappings/IntMappingsSnapshot";

export class IntMappingsSnapshotService {
  private repository = new Map<string, IntMappingsSnapshotModel>();

  public create(data: Omit<IntMappingsSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): IntMappingsSnapshotModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntMappingsSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntMappingsSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntMappingsSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntMappingsSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntMappingsSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntMappingsSnapshotModel>): IntMappingsSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntMappingsSnapshotModel = {
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
