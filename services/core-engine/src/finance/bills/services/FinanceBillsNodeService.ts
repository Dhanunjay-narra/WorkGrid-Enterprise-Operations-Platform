import { FinanceBillsNodeModel, FinanceBillsNodeValidator } from "@nexora/types/domains/finance/bills/FinanceBillsNode";

export class FinanceBillsNodeService {
  private repository = new Map<string, FinanceBillsNodeModel>();

  public create(data: Omit<FinanceBillsNodeModel, "id" | "version" | "createdAt" | "updatedAt">): FinanceBillsNodeModel {
    const id = "fina_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: FinanceBillsNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinanceBillsNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinanceBillsNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinanceBillsNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: FinanceBillsNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<FinanceBillsNodeModel>): FinanceBillsNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinanceBillsNodeModel = {
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
