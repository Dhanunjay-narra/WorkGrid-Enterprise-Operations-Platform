import { InvPurchaseOrderData, InvPurchaseOrderValidator } from "../../../../packages/types/src/domains/inventory/InvPurchaseOrder";

export class InvPurchaseOrderService {
  private repository = new Map<string, InvPurchaseOrderData>();

  public create(data: Omit<InvPurchaseOrderData, "id" | "createdAt" | "updatedAt">): InvPurchaseOrderData {
    const id = "inv_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: InvPurchaseOrderData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = InvPurchaseOrderValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InvPurchaseOrder: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InvPurchaseOrderData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): InvPurchaseOrderData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<InvPurchaseOrderData>): InvPurchaseOrderData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InvPurchaseOrderData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
