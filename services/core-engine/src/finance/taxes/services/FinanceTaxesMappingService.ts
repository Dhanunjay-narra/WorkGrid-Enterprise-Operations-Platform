import { FinanceTaxesMappingModel, FinanceTaxesMappingValidator } from "@nexora/types/domains/finance/taxes/FinanceTaxesMapping";

export class FinanceTaxesMappingService {
  private repository = new Map<string, FinanceTaxesMappingModel>();

  public create(data: Omit<FinanceTaxesMappingModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceTaxesMappingModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceTaxesMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceTaxesMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceTaxesMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceTaxesMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceTaxesMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceTaxesMappingModel>): FinanceTaxesMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceTaxesMappingModel = {
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
