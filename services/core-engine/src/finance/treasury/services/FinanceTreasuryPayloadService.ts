import { FinanceTreasuryPayloadModel, FinanceTreasuryPayloadValidator } from "@nexora/types/domains/finance/treasury/FinanceTreasuryPayload";

export class FinanceTreasuryPayloadService {
  private repository = new Map<string, FinanceTreasuryPayloadModel>();

  public create(data: Omit<FinanceTreasuryPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceTreasuryPayloadModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceTreasuryPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceTreasuryPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceTreasuryPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceTreasuryPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceTreasuryPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceTreasuryPayloadModel>): FinanceTreasuryPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceTreasuryPayloadModel = {
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
