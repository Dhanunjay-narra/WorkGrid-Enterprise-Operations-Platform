import { InventoryTransfersSessionModel, InventoryTransfersSessionValidator } from "@nexora/types/domains/inventory/transfers/InventoryTransfersSession";

export class InventoryTransfersSessionService {
  private repository = new Map<string, InventoryTransfersSessionModel>();

  public create(data: Omit<InventoryTransfersSessionModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryTransfersSessionModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryTransfersSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryTransfersSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryTransfersSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryTransfersSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryTransfersSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryTransfersSessionModel>): InventoryTransfersSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryTransfersSessionModel = {
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
