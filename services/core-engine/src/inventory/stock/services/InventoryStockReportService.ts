import { InventoryStockReportModel, InventoryStockReportValidator } from "@nexora/types/domains/inventory/stock/InventoryStockReport";

export class InventoryStockReportService {
  private repository = new Map<string, InventoryStockReportModel>();

  public create(data: Omit<InventoryStockReportModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryStockReportModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryStockReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryStockReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryStockReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryStockReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryStockReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryStockReportModel>): InventoryStockReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryStockReportModel = {
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
