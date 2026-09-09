import { InventoryReorderSessionModel, InventoryReorderSessionValidator } from "@nexora/types/domains/inventory/reorder/InventoryReorderSession";

export class InventoryReorderSessionService {
  private repository = new Map<string, InventoryReorderSessionModel>();

  public create(data: Omit<InventoryReorderSessionModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryReorderSessionModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryReorderSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryReorderSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryReorderSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryReorderSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryReorderSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryReorderSessionModel>): InventoryReorderSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryReorderSessionModel = {
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
