import { FinVendorBillData, FinVendorBillValidator } from "../../../../packages/types/src/domains/finance/FinVendorBill";

export class FinVendorBillService {
  private repository = new Map<string, FinVendorBillData>();

  public create(data: Omit<FinVendorBillData, "id" | "createdAt" | "updatedAt">): FinVendorBillData {
    const id = "fin_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: FinVendorBillData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinVendorBillValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinVendorBill: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinVendorBillData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): FinVendorBillData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<FinVendorBillData>): FinVendorBillData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinVendorBillData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
