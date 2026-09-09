import { InventorySkuAuditLogModel, InventorySkuAuditLogValidator } from "@nexora/types/domains/inventory/sku/InventorySkuAuditLog";

export class InventorySkuAuditLogService {
  private repository = new Map<string, InventorySkuAuditLogModel>();

  public create(data: Omit<InventorySkuAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySkuAuditLogModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySkuAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySkuAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySkuAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySkuAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySkuAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySkuAuditLogModel>): InventorySkuAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySkuAuditLogModel = {
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
