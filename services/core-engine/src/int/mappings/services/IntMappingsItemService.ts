import { IntMappingsItemModel, IntMappingsItemValidator } from "@nexora/types/domains/int/mappings/IntMappingsItem";

export class IntMappingsItemService {
  private repository = new Map<string, IntMappingsItemModel>();

  public create(data: Omit<IntMappingsItemModel, "id" | "version" | "createdAt" | "updatedAt">): IntMappingsItemModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntMappingsItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntMappingsItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntMappingsItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntMappingsItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntMappingsItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntMappingsItemModel>): IntMappingsItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntMappingsItemModel = {
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
