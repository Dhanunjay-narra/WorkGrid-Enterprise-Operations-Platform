import { IntMappingsMappingModel, IntMappingsMappingValidator } from "@nexora/types/domains/int/mappings/IntMappingsMapping";

export class IntMappingsMappingService {
  private repository = new Map<string, IntMappingsMappingModel>();

  public create(data: Omit<IntMappingsMappingModel, "id" | "version" | "createdAt" | "updatedAt">): IntMappingsMappingModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntMappingsMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntMappingsMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntMappingsMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntMappingsMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntMappingsMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntMappingsMappingModel>): IntMappingsMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntMappingsMappingModel = {
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
