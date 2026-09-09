import { InventoryWarehouseReportModel, InventoryWarehouseReportValidator } from "@nexora/types/domains/inventory/warehouse/InventoryWarehouseReport";

export class InventoryWarehouseReportService {
  private repository = new Map<string, InventoryWarehouseReportModel>();

  public create(data: Omit<InventoryWarehouseReportModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryWarehouseReportModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryWarehouseReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryWarehouseReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryWarehouseReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryWarehouseReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryWarehouseReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryWarehouseReportModel>): InventoryWarehouseReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryWarehouseReportModel = {
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
