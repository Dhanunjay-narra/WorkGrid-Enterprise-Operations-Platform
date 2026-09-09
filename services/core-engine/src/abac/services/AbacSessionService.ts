import { AbacSessionModel, AbacSessionValidator } from "@nexora/types/domains/abac/AbacSession";

export class AbacSessionService {
  private repository = new Map<string, AbacSessionModel>();

  public create(data: Omit<AbacSessionModel, "id" | "version" | "createdAt" | "updatedAt">): AbacSessionModel {
    const id = "abac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AbacSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AbacSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AbacSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AbacSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AbacSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AbacSessionModel>): AbacSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AbacSessionModel = {
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
