import { InvGoodsReceiptData, InvGoodsReceiptValidator } from "../../../../packages/types/src/domains/inventory/InvGoodsReceipt";

export class InvGoodsReceiptService {
  private repository = new Map<string, InvGoodsReceiptData>();

  public create(data: Omit<InvGoodsReceiptData, "id" | "createdAt" | "updatedAt">): InvGoodsReceiptData {
    const id = "inv_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: InvGoodsReceiptData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = InvGoodsReceiptValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InvGoodsReceipt: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InvGoodsReceiptData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): InvGoodsReceiptData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<InvGoodsReceiptData>): InvGoodsReceiptData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InvGoodsReceiptData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
