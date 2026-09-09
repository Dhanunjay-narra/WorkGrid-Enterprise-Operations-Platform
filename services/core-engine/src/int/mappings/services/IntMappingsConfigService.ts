import { IntMappingsConfigModel, IntMappingsConfigValidator } from "@nexora/types/domains/int/mappings/IntMappingsConfig";

export class IntMappingsConfigService {
  private repository = new Map<string, IntMappingsConfigModel>();

  public create(data: Omit<IntMappingsConfigModel, "id" | "version" | "createdAt" | "updatedAt">): IntMappingsConfigModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntMappingsConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntMappingsConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntMappingsConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntMappingsConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntMappingsConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntMappingsConfigModel>): IntMappingsConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntMappingsConfigModel = {
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
