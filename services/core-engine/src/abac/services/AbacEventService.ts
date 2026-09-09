import { AbacEventModel, AbacEventValidator } from "@nexora/types/domains/abac/AbacEvent";

export class AbacEventService {
  private repository = new Map<string, AbacEventModel>();

  public create(data: Omit<AbacEventModel, "id" | "version" | "createdAt" | "updatedAt">): AbacEventModel {
    const id = "abac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AbacEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AbacEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AbacEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AbacEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AbacEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AbacEventModel>): AbacEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AbacEventModel = {
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
