import { IntMappingsEventModel, IntMappingsEventValidator } from "@nexora/types/domains/int/mappings/IntMappingsEvent";

export class IntMappingsEventService {
  private repository = new Map<string, IntMappingsEventModel>();

  public create(data: Omit<IntMappingsEventModel, "id" | "version" | "createdAt" | "updatedAt">): IntMappingsEventModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntMappingsEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntMappingsEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntMappingsEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntMappingsEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntMappingsEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntMappingsEventModel>): IntMappingsEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntMappingsEventModel = {
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
