import { InventoryTransfersConfigModel, InventoryTransfersConfigValidator } from "@nexora/types/domains/inventory/transfers/InventoryTransfersConfig";

export class InventoryTransfersConfigService {
  private repository = new Map<string, InventoryTransfersConfigModel>();

  public create(data: Omit<InventoryTransfersConfigModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryTransfersConfigModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryTransfersConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryTransfersConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryTransfersConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryTransfersConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryTransfersConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryTransfersConfigModel>): InventoryTransfersConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryTransfersConfigModel = {
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
