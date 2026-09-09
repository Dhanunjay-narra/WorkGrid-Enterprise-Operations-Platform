import { InventorySuppliersRecordModel, InventorySuppliersRecordValidator } from "@nexora/types/domains/inventory/suppliers/InventorySuppliersRecord";

export class InventorySuppliersRecordService {
  private repository = new Map<string, InventorySuppliersRecordModel>();

  public create(data: Omit<InventorySuppliersRecordModel, "id" | "version" | "createdAt" | "updatedAt">): InventorySuppliersRecordModel {
    const id = "inve_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: InventorySuppliersRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = InventorySuppliersRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InventorySuppliersRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InventorySuppliersRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: InventorySuppliersRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<InventorySuppliersRecordModel>): InventorySuppliersRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InventorySuppliersRecordModel = {
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
