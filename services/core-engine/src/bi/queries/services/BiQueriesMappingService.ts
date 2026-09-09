import { BiQueriesMappingModel, BiQueriesMappingValidator } from "@nexora/types/domains/bi/queries/BiQueriesMapping";

export class BiQueriesMappingService {
  private repository = new Map<string, BiQueriesMappingModel>();

  public create(data: Omit<BiQueriesMappingModel, "id" | "version" | "createdAt" | "updatedAt">): BiQueriesMappingModel {
    const id = "bi_q_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiQueriesMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiQueriesMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiQueriesMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiQueriesMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiQueriesMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiQueriesMappingModel>): BiQueriesMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiQueriesMappingModel = {
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
