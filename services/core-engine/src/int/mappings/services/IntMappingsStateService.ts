import { IntMappingsStateModel, IntMappingsStateValidator } from "@nexora/types/domains/int/mappings/IntMappingsState";

export class IntMappingsStateService {
  private repository = new Map<string, IntMappingsStateModel>();

  public create(data: Omit<IntMappingsStateModel, "id" | "version" | "createdAt" | "updatedAt">): IntMappingsStateModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntMappingsStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntMappingsStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntMappingsState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntMappingsStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntMappingsStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntMappingsStateModel>): IntMappingsStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntMappingsStateModel = {
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
