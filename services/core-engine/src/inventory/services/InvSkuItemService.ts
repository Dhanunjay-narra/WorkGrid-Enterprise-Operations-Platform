import { InvSkuItemData, InvSkuItemValidator } from "../../../../packages/types/src/domains/inventory/InvSkuItem";

export class InvSkuItemService {
  private repository = new Map<string, InvSkuItemData>();

  public create(data: Omit<InvSkuItemData, "id" | "createdAt" | "updatedAt">): InvSkuItemData {
    const id = "inv_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: InvSkuItemData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = InvSkuItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InvSkuItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InvSkuItemData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): InvSkuItemData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<InvSkuItemData>): InvSkuItemData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InvSkuItemData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
