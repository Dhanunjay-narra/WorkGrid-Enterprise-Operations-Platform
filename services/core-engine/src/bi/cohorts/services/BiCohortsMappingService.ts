import { BiCohortsMappingModel, BiCohortsMappingValidator } from "@nexora/types/domains/bi/cohorts/BiCohortsMapping";

export class BiCohortsMappingService {
  private repository = new Map<string, BiCohortsMappingModel>();

  public create(data: Omit<BiCohortsMappingModel, "id" | "version" | "createdAt" | "updatedAt">): BiCohortsMappingModel {
    const id = "bi_c_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiCohortsMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiCohortsMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiCohortsMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiCohortsMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiCohortsMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiCohortsMappingModel>): BiCohortsMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiCohortsMappingModel = {
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
