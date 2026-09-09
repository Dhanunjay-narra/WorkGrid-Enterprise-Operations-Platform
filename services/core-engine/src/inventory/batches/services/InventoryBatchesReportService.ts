import { InventoryBatchesReportModel, InventoryBatchesReportValidator } from "@nexora/types/domains/inventory/batches/InventoryBatchesReport";

export class InventoryBatchesReportService {
  private repository = new Map<string, InventoryBatchesReportModel>();

  public create(data: Omit<InventoryBatchesReportModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryBatchesReportModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryBatchesReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryBatchesReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryBatchesReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryBatchesReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryBatchesReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryBatchesReportModel>): InventoryBatchesReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryBatchesReportModel = {
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
