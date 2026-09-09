import { InventoryTransfersReportModel, InventoryTransfersReportValidator } from "@nexora/types/domains/inventory/transfers/InventoryTransfersReport";

export class InventoryTransfersReportService {
  private repository = new Map<string, InventoryTransfersReportModel>();

  public create(data: Omit<InventoryTransfersReportModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryTransfersReportModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryTransfersReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryTransfersReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryTransfersReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryTransfersReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryTransfersReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryTransfersReportModel>): InventoryTransfersReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryTransfersReportModel = {
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
