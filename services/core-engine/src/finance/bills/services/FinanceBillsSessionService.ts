import { FinanceBillsSessionModel, FinanceBillsSessionValidator } from "@nexora/types/domains/finance/bills/FinanceBillsSession";

export class FinanceBillsSessionService {
  private repository = new Map<string, FinanceBillsSessionModel>();

  public create(data: Omit<FinanceBillsSessionModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBillsSessionModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBillsSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBillsSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBillsSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBillsSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBillsSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBillsSessionModel>): FinanceBillsSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBillsSessionModel = {
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
