import { InventoryWarehouseAuditLogModel, InventoryWarehouseAuditLogValidator } from "@nexora/types/domains/inventory/warehouse/InventoryWarehouseAuditLog";

export class InventoryWarehouseAuditLogService {
  private repository = new Map<string, InventoryWarehouseAuditLogModel>();

  public create(data: Omit<InventoryWarehouseAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryWarehouseAuditLogModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryWarehouseAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryWarehouseAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryWarehouseAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryWarehouseAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryWarehouseAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryWarehouseAuditLogModel>): InventoryWarehouseAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryWarehouseAuditLogModel = {
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
