import { InventoryReorderAssignmentModel, InventoryReorderAssignmentValidator } from "@nexora/types/domains/inventory/reorder/InventoryReorderAssignment";

export class InventoryReorderAssignmentService {
  private repository = new Map<string, InventoryReorderAssignmentModel>();

  public create(data: Omit<InventoryReorderAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryReorderAssignmentModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryReorderAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryReorderAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryReorderAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryReorderAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryReorderAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryReorderAssignmentModel>): InventoryReorderAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryReorderAssignmentModel = {
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
