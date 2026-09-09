import { InventoryTransfersNodeModel, InventoryTransfersNodeValidator } from "@nexora/types/domains/inventory/transfers/InventoryTransfersNode";

export class InventoryTransfersNodeService {
  private repository = new Map<string, InventoryTransfersNodeModel>();

  public create(data: Omit<InventoryTransfersNodeModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryTransfersNodeModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryTransfersNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryTransfersNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryTransfersNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryTransfersNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryTransfersNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryTransfersNodeModel>): InventoryTransfersNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryTransfersNodeModel = {
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
