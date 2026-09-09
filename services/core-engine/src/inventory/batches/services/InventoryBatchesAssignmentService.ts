import { InventoryBatchesAssignmentModel, InventoryBatchesAssignmentValidator } from "@nexora/types/domains/inventory/batches/InventoryBatchesAssignment";

export class InventoryBatchesAssignmentService {
  private repository = new Map<string, InventoryBatchesAssignmentModel>();

  public create(data: Omit<InventoryBatchesAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryBatchesAssignmentModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryBatchesAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryBatchesAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryBatchesAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryBatchesAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryBatchesAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryBatchesAssignmentModel>): InventoryBatchesAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryBatchesAssignmentModel = {
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
