import { InventoryOrdersReportModel, InventoryOrdersReportValidator } from "@nexora/types/domains/inventory/orders/InventoryOrdersReport";

export class InventoryOrdersReportService {
  private repository = new Map<string, InventoryOrdersReportModel>();

  public create(data: Omit<InventoryOrdersReportModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryOrdersReportModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryOrdersReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryOrdersReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryOrdersReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryOrdersReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryOrdersReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryOrdersReportModel>): InventoryOrdersReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryOrdersReportModel = {
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
