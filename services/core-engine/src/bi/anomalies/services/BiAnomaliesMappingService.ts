import { BiAnomaliesMappingModel, BiAnomaliesMappingValidator } from "@nexora/types/domains/bi/anomalies/BiAnomaliesMapping";

export class BiAnomaliesMappingService {
  private repository = new Map<string, BiAnomaliesMappingModel>();

  public create(data: Omit<BiAnomaliesMappingModel, "id" | "version" | "createdAt" | "updatedAt">): BiAnomaliesMappingModel {
    const id = "bi_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiAnomaliesMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiAnomaliesMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiAnomaliesMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiAnomaliesMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiAnomaliesMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiAnomaliesMappingModel>): BiAnomaliesMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiAnomaliesMappingModel = {
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
