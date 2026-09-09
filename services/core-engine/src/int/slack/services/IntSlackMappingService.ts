import { IntSlackMappingModel, IntSlackMappingValidator } from "@nexora/types/domains/int/slack/IntSlackMapping";

export class IntSlackMappingService {
  private repository = new Map<string, IntSlackMappingModel>();

  public create(data: Omit<IntSlackMappingModel, "id" | "version" | "createdAt" | "updatedAt">): IntSlackMappingModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSlackMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSlackMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSlackMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSlackMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSlackMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSlackMappingModel>): IntSlackMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSlackMappingModel = {
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
