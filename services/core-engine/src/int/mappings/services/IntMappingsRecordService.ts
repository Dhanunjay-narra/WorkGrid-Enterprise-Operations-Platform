import { IntMappingsRecordModel, IntMappingsRecordValidator } from "@nexora/types/domains/int/mappings/IntMappingsRecord";

export class IntMappingsRecordService {
  private repository = new Map<string, IntMappingsRecordModel>();

  public create(data: Omit<IntMappingsRecordModel, "id" | "version" | "createdAt" | "updatedAt">): IntMappingsRecordModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntMappingsRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntMappingsRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntMappingsRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntMappingsRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntMappingsRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntMappingsRecordModel>): IntMappingsRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntMappingsRecordModel = {
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
