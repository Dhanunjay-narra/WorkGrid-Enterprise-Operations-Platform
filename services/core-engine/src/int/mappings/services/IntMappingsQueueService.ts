import { IntMappingsQueueModel, IntMappingsQueueValidator } from "@nexora/types/domains/int/mappings/IntMappingsQueue";

export class IntMappingsQueueService {
  private repository = new Map<string, IntMappingsQueueModel>();

  public create(data: Omit<IntMappingsQueueModel, "id" | "version" | "createdAt" | "updatedAt">): IntMappingsQueueModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntMappingsQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntMappingsQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntMappingsQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntMappingsQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntMappingsQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntMappingsQueueModel>): IntMappingsQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntMappingsQueueModel = {
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
