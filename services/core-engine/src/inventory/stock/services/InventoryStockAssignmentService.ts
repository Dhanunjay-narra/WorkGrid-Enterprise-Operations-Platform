import { InventoryStockAssignmentModel, InventoryStockAssignmentValidator } from "@nexora/types/domains/inventory/stock/InventoryStockAssignment";

export class InventoryStockAssignmentService {
  private repository = new Map<string, InventoryStockAssignmentModel>();

  public create(data: Omit<InventoryStockAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryStockAssignmentModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryStockAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryStockAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryStockAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryStockAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryStockAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryStockAssignmentModel>): InventoryStockAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryStockAssignmentModel = {
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
