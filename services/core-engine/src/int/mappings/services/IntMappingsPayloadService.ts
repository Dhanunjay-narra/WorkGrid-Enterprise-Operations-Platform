import { IntMappingsPayloadModel, IntMappingsPayloadValidator } from "@nexora/types/domains/int/mappings/IntMappingsPayload";

export class IntMappingsPayloadService {
  private repository = new Map<string, IntMappingsPayloadModel>();

  public create(data: Omit<IntMappingsPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): IntMappingsPayloadModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntMappingsPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntMappingsPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntMappingsPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntMappingsPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntMappingsPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntMappingsPayloadModel>): IntMappingsPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntMappingsPayloadModel = {
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
