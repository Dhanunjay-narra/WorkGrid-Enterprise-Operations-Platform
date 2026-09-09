import { AbacProfileModel, AbacProfileValidator } from "@nexora/types/domains/abac/AbacProfile";

export class AbacProfileService {
  private repository = new Map<string, AbacProfileModel>();

  public create(data: Omit<AbacProfileModel, "id" | "version" | "createdAt" | "updatedAt">): AbacProfileModel {
    const id = "abac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AbacProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AbacProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AbacProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AbacProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AbacProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AbacProfileModel>): AbacProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AbacProfileModel = {
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
