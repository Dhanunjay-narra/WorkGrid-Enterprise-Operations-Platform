import { IntMappingsProfileModel, IntMappingsProfileValidator } from "@nexora/types/domains/int/mappings/IntMappingsProfile";

export class IntMappingsProfileService {
  private repository = new Map<string, IntMappingsProfileModel>();

  public create(data: Omit<IntMappingsProfileModel, "id" | "version" | "createdAt" | "updatedAt">): IntMappingsProfileModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntMappingsProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntMappingsProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntMappingsProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntMappingsProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntMappingsProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntMappingsProfileModel>): IntMappingsProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntMappingsProfileModel = {
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
