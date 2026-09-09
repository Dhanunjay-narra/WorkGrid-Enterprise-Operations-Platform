import { InvWarehouseZoneData, InvWarehouseZoneValidator } from "../../../../packages/types/src/domains/inventory/InvWarehouseZone";

export class InvWarehouseZoneService {
  private repository = new Map<string, InvWarehouseZoneData>();

  public create(data: Omit<InvWarehouseZoneData, "id" | "createdAt" | "updatedAt">): InvWarehouseZoneData {
    const id = "inv_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: InvWarehouseZoneData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = InvWarehouseZoneValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InvWarehouseZone: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InvWarehouseZoneData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): InvWarehouseZoneData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<InvWarehouseZoneData>): InvWarehouseZoneData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InvWarehouseZoneData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
