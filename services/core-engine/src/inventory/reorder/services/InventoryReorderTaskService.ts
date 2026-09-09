import { InventoryReorderTaskModel, InventoryReorderTaskValidator } from "@nexora/types/domains/inventory/reorder/InventoryReorderTask";

export class InventoryReorderTaskService {
  private repository = new Map<string, InventoryReorderTaskModel>();

  public create(data: Omit<InventoryReorderTaskModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryReorderTaskModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryReorderTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryReorderTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryReorderTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryReorderTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryReorderTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryReorderTaskModel>): InventoryReorderTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryReorderTaskModel = {
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
