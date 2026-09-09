import { InvWarehouseData, InvWarehouseValidator } from "../../../../packages/types/src/domains/inventory/InvWarehouse";

export class InvWarehouseService {
  private repository = new Map<string, InvWarehouseData>();

  public create(data: Omit<InvWarehouseData, "id" | "createdAt" | "updatedAt">): InvWarehouseData {
    const id = "inv_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: InvWarehouseData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = InvWarehouseValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InvWarehouse: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InvWarehouseData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): InvWarehouseData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<InvWarehouseData>): InvWarehouseData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InvWarehouseData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
