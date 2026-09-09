import { InvStockLevelData, InvStockLevelValidator } from "../../../../packages/types/src/domains/inventory/InvStockLevel";

export class InvStockLevelService {
  private repository = new Map<string, InvStockLevelData>();

  public create(data: Omit<InvStockLevelData, "id" | "createdAt" | "updatedAt">): InvStockLevelData {
    const id = "inv_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: InvStockLevelData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = InvStockLevelValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InvStockLevel: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InvStockLevelData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): InvStockLevelData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<InvStockLevelData>): InvStockLevelData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InvStockLevelData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
