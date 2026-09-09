import { FinExpenseReceiptData, FinExpenseReceiptValidator } from "../../../../packages/types/src/domains/finance/FinExpenseReceipt";

export class FinExpenseReceiptService {
  private repository = new Map<string, FinExpenseReceiptData>();

  public create(data: Omit<FinExpenseReceiptData, "id" | "createdAt" | "updatedAt">): FinExpenseReceiptData {
    const id = "fin_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: FinExpenseReceiptData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinExpenseReceiptValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinExpenseReceipt: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinExpenseReceiptData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): FinExpenseReceiptData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<FinExpenseReceiptData>): FinExpenseReceiptData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinExpenseReceiptData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
