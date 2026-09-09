import { InventorySkuAssignmentModel, InventorySkuAssignmentValidator } from "@nexora/types/domains/inventory/sku/InventorySkuAssignment";

export class InventorySkuAssignmentService {
  private repository = new Map<string, InventorySkuAssignmentModel>();

  public create(data: Omit<InventorySkuAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySkuAssignmentModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySkuAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySkuAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySkuAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySkuAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySkuAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySkuAssignmentModel>): InventorySkuAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySkuAssignmentModel = {
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
