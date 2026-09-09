import { InventoryTransfersEntryModel, InventoryTransfersEntryValidator } from "@nexora/types/domains/inventory/transfers/InventoryTransfersEntry";

export class InventoryTransfersEntryService {
  private repository = new Map<string, InventoryTransfersEntryModel>();

  public create(data: Omit<InventoryTransfersEntryModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryTransfersEntryModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryTransfersEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryTransfersEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryTransfersEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryTransfersEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryTransfersEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryTransfersEntryModel>): InventoryTransfersEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryTransfersEntryModel = {
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
