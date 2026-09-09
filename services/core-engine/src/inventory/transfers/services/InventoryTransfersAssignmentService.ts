import { InventoryTransfersAssignmentModel, InventoryTransfersAssignmentValidator } from "@nexora/types/domains/inventory/transfers/InventoryTransfersAssignment";

export class InventoryTransfersAssignmentService {
  private repository = new Map<string, InventoryTransfersAssignmentModel>();

  public create(data: Omit<InventoryTransfersAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryTransfersAssignmentModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryTransfersAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryTransfersAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryTransfersAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryTransfersAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryTransfersAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryTransfersAssignmentModel>): InventoryTransfersAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryTransfersAssignmentModel = {
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
