import { InvStockReservationData, InvStockReservationValidator } from "../../../../packages/types/src/domains/inventory/InvStockReservation";

export class InvStockReservationService {
  private repository = new Map<string, InvStockReservationData>();

  public create(data: Omit<InvStockReservationData, "id" | "createdAt" | "updatedAt">): InvStockReservationData {
    const id = "inv_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: InvStockReservationData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = InvStockReservationValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InvStockReservation: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InvStockReservationData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): InvStockReservationData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<InvStockReservationData>): InvStockReservationData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InvStockReservationData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
