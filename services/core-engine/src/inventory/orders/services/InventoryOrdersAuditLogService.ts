import { InventoryOrdersAuditLogModel, InventoryOrdersAuditLogValidator } from "@nexora/types/domains/inventory/orders/InventoryOrdersAuditLog";

export class InventoryOrdersAuditLogService {
  private repository = new Map<string, InventoryOrdersAuditLogModel>();

  public create(data: Omit<InventoryOrdersAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryOrdersAuditLogModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryOrdersAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryOrdersAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryOrdersAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryOrdersAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryOrdersAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryOrdersAuditLogModel>): InventoryOrdersAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryOrdersAuditLogModel = {
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
