import { FinanceBillsConfigModel, FinanceBillsConfigValidator } from "@nexora/types/domains/finance/bills/FinanceBillsConfig";

export class FinanceBillsConfigService {
  private repository = new Map<string, FinanceBillsConfigModel>();

  public create(data: Omit<FinanceBillsConfigModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBillsConfigModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBillsConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBillsConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBillsConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBillsConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBillsConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBillsConfigModel>): FinanceBillsConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBillsConfigModel = {
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
