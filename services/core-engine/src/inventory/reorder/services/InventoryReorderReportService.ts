import { InventoryReorderReportModel, InventoryReorderReportValidator } from "@nexora/types/domains/inventory/reorder/InventoryReorderReport";

export class InventoryReorderReportService {
  private repository = new Map<string, InventoryReorderReportModel>();

  public create(data: Omit<InventoryReorderReportModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryReorderReportModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryReorderReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryReorderReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryReorderReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryReorderReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryReorderReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryReorderReportModel>): InventoryReorderReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryReorderReportModel = {
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
