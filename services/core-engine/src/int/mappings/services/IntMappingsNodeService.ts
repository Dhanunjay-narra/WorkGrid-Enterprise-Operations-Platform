import { IntMappingsNodeModel, IntMappingsNodeValidator } from "@nexora/types/domains/int/mappings/IntMappingsNode";

export class IntMappingsNodeService {
  private repository = new Map<string, IntMappingsNodeModel>();

  public create(data: Omit<IntMappingsNodeModel, "id" | "version" | "createdAt" | "updatedAt">): IntMappingsNodeModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntMappingsNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntMappingsNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntMappingsNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntMappingsNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntMappingsNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntMappingsNodeModel>): IntMappingsNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntMappingsNodeModel = {
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
