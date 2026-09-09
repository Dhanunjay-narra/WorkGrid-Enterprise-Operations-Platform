import { InventoryTransfersPolicyModel, InventoryTransfersPolicyValidator } from "@nexora/types/domains/inventory/transfers/InventoryTransfersPolicy";

export class InventoryTransfersPolicyService {
  private repository = new Map<string, InventoryTransfersPolicyModel>();

  public create(data: Omit<InventoryTransfersPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): InventoryTransfersPolicyModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventoryTransfersPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventoryTransfersPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventoryTransfersPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventoryTransfersPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventoryTransfersPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventoryTransfersPolicyModel>): InventoryTransfersPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventoryTransfersPolicyModel = {
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
