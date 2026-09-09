import { AbacTaskModel, AbacTaskValidator } from "@nexora/types/domains/abac/AbacTask";

export class AbacTaskService {
  private repository = new Map<string, AbacTaskModel>();

  public create(data: Omit<AbacTaskModel, "id" | "version" | "createdAt" | "updatedAt">): AbacTaskModel {
    const id = "abac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AbacTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AbacTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AbacTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AbacTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AbacTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AbacTaskModel>): AbacTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AbacTaskModel = {
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
