import { AbacRecordModel, AbacRecordValidator } from "@nexora/types/domains/abac/AbacRecord";

export class AbacRecordService {
  private repository = new Map<string, AbacRecordModel>();

  public create(data: Omit<AbacRecordModel, "id" | "version" | "createdAt" | "updatedAt">): AbacRecordModel {
    const id = "abac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AbacRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AbacRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AbacRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AbacRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AbacRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AbacRecordModel>): AbacRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AbacRecordModel = {
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
