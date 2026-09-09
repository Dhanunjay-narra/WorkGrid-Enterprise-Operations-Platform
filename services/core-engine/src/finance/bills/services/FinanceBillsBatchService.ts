import { FinanceBillsBatchModel, FinanceBillsBatchValidator } from "@nexora/types/domains/finance/bills/FinanceBillsBatch";

export class FinanceBillsBatchService {
  private repository = new Map<string, FinanceBillsBatchModel>();

  public create(data: Omit<FinanceBillsBatchModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBillsBatchModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBillsBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBillsBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBillsBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBillsBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBillsBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBillsBatchModel>): FinanceBillsBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBillsBatchModel = {
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
