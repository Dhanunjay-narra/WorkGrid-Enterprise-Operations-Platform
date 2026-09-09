import { AbacStateModel, AbacStateValidator } from "@nexora/types/domains/abac/AbacState";

export class AbacStateService {
  private repository = new Map<string, AbacStateModel>();

  public create(data: Omit<AbacStateModel, "id" | "version" | "createdAt" | "updatedAt">): AbacStateModel {
    const id = "abac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AbacStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AbacStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AbacState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AbacStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AbacStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AbacStateModel>): AbacStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AbacStateModel = {
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
