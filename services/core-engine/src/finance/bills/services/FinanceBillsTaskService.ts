import { FinanceBillsTaskModel, FinanceBillsTaskValidator } from "@nexora/types/domains/finance/bills/FinanceBillsTask";

export class FinanceBillsTaskService {
  private repository = new Map<string, FinanceBillsTaskModel>();

  public create(data: Omit<FinanceBillsTaskModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBillsTaskModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBillsTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBillsTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBillsTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBillsTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBillsTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBillsTaskModel>): FinanceBillsTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBillsTaskModel = {
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
