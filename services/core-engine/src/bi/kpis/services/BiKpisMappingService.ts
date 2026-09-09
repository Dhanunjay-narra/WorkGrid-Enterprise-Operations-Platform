import { BiKpisMappingModel, BiKpisMappingValidator } from "@nexora/types/domains/bi/kpis/BiKpisMapping";

export class BiKpisMappingService {
  private repository = new Map<string, BiKpisMappingModel>();

  public create(data: Omit<BiKpisMappingModel, "id" | "version" | "createdAt" | "updatedAt">): BiKpisMappingModel {
    const id = "bi_k_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiKpisMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiKpisMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiKpisMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiKpisMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiKpisMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiKpisMappingModel>): BiKpisMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiKpisMappingModel = {
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
