import { InventoryStockAuditLogModel, InventoryStockAuditLogValidator } from "@nexora/types/domains/inventory/stock/InventoryStockAuditLog";

export class InventoryStockAuditLogService {
  private repository = new Map<string, InventoryStockAuditLogModel>();

  public create(data: Omit<InventoryStockAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryStockAuditLogModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryStockAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryStockAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryStockAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryStockAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryStockAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryStockAuditLogModel>): InventoryStockAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryStockAuditLogModel = {
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
