import { AbacEntryModel, AbacEntryValidator } from "@nexora/types/domains/abac/AbacEntry";

export class AbacEntryService {
  private repository = new Map<string, AbacEntryModel>();

  public create(data: Omit<AbacEntryModel, "id" | "version" | "createdAt" | "updatedAt">): AbacEntryModel {
    const id = "abac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AbacEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AbacEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AbacEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AbacEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AbacEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AbacEntryModel>): AbacEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AbacEntryModel = {
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
