import { InvStockMovementData, InvStockMovementValidator } from "../../../../packages/types/src/domains/inventory/InvStockMovement";

export class InvStockMovementService {
  private repository = new Map<string, InvStockMovementData>();

  public create(data: Omit<InvStockMovementData, "id" | "createdAt" | "updatedAt">): InvStockMovementData {
    const id = "inv_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: InvStockMovementData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = InvStockMovementValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InvStockMovement: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InvStockMovementData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): InvStockMovementData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<InvStockMovementData>): InvStockMovementData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InvStockMovementData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
