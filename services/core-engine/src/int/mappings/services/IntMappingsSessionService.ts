import { IntMappingsSessionModel, IntMappingsSessionValidator } from "@nexora/types/domains/int/mappings/IntMappingsSession";

export class IntMappingsSessionService {
  private repository = new Map<string, IntMappingsSessionModel>();

  public create(data: Omit<IntMappingsSessionModel, "id" | "version" | "createdAt" | "updatedAt">): IntMappingsSessionModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntMappingsSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntMappingsSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntMappingsSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntMappingsSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntMappingsSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntMappingsSessionModel>): IntMappingsSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntMappingsSessionModel = {
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
