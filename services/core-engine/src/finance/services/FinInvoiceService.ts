import { FinInvoiceData, FinInvoiceValidator } from "../../../../packages/types/src/domains/finance/FinInvoice";

export class FinInvoiceService {
  private repository = new Map<string, FinInvoiceData>();

  public create(data: Omit<FinInvoiceData, "id" | "createdAt" | "updatedAt">): FinInvoiceData {
    const id = "fin_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: FinInvoiceData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinInvoiceValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinInvoice: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinInvoiceData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): FinInvoiceData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<FinInvoiceData>): FinInvoiceData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinInvoiceData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
