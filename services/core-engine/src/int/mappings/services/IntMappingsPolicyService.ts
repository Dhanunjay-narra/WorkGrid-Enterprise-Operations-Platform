import { IntMappingsPolicyModel, IntMappingsPolicyValidator } from "@nexora/types/domains/int/mappings/IntMappingsPolicy";

export class IntMappingsPolicyService {
  private repository = new Map<string, IntMappingsPolicyModel>();

  public create(data: Omit<IntMappingsPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): IntMappingsPolicyModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntMappingsPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntMappingsPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntMappingsPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntMappingsPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntMappingsPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntMappingsPolicyModel>): IntMappingsPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntMappingsPolicyModel = {
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
