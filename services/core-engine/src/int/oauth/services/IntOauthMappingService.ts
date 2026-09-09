import { IntOauthMappingModel, IntOauthMappingValidator } from "@nexora/types/domains/int/oauth/IntOauthMapping";

export class IntOauthMappingService {
  private repository = new Map<string, IntOauthMappingModel>();

  public create(data: Omit<IntOauthMappingModel, "id" | "version" | "createdAt" | "updatedAt">): IntOauthMappingModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntOauthMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntOauthMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntOauthMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntOauthMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntOauthMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntOauthMappingModel>): IntOauthMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntOauthMappingModel = {
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
