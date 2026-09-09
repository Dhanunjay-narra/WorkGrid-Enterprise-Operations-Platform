import { InvPurchaseOrderItemData, InvPurchaseOrderItemValidator } from "../../../../packages/types/src/domains/inventory/InvPurchaseOrderItem";

export class InvPurchaseOrderItemService {
  private repository = new Map<string, InvPurchaseOrderItemData>();

  public create(data: Omit<InvPurchaseOrderItemData, "id" | "createdAt" | "updatedAt">): InvPurchaseOrderItemData {
    const id = "inv_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: InvPurchaseOrderItemData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = InvPurchaseOrderItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InvPurchaseOrderItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InvPurchaseOrderItemData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): InvPurchaseOrderItemData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<InvPurchaseOrderItemData>): InvPurchaseOrderItemData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InvPurchaseOrderItemData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
