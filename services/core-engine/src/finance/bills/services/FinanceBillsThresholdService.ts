import { FinanceBillsThresholdModel, FinanceBillsThresholdValidator } from "@nexora/types/domains/finance/bills/FinanceBillsThreshold";

export class FinanceBillsThresholdService {
  private repository = new Map<string, FinanceBillsThresholdModel>();

  public create(data: Omit<FinanceBillsThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBillsThresholdModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBillsThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBillsThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBillsThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBillsThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBillsThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBillsThresholdModel>): FinanceBillsThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBillsThresholdModel = {
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
