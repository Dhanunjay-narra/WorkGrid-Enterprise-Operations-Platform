import { FinanceTaxesPayloadModel, FinanceTaxesPayloadValidator } from "@nexora/types/domains/finance/taxes/FinanceTaxesPayload";

export class FinanceTaxesPayloadService {
  private repository = new Map<string, FinanceTaxesPayloadModel>();

  public create(data: Omit<FinanceTaxesPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceTaxesPayloadModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceTaxesPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceTaxesPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceTaxesPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceTaxesPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceTaxesPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceTaxesPayloadModel>): FinanceTaxesPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceTaxesPayloadModel = {
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
