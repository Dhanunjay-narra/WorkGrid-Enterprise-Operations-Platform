import { IntMappingsSummaryModel, IntMappingsSummaryValidator } from "@nexora/types/domains/int/mappings/IntMappingsSummary";

export class IntMappingsSummaryService {
  private repository = new Map<string, IntMappingsSummaryModel>();

  public create(data: Omit<IntMappingsSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): IntMappingsSummaryModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntMappingsSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntMappingsSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntMappingsSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntMappingsSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntMappingsSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntMappingsSummaryModel>): IntMappingsSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntMappingsSummaryModel = {
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
