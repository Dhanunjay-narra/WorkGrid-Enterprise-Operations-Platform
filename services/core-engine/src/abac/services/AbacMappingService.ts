import { AbacMappingModel, AbacMappingValidator } from "@nexora/types/domains/abac/AbacMapping";

export class AbacMappingService {
  private repository = new Map<string, AbacMappingModel>();

  public create(data: Omit<AbacMappingModel, "id" | "version" | "createdAt" | "updatedAt">): AbacMappingModel {
    const id = "abac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AbacMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AbacMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AbacMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AbacMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AbacMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AbacMappingModel>): AbacMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AbacMappingModel = {
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
