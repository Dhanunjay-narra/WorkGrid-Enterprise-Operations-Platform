import { InvSupplierData, InvSupplierValidator } from "../../../../packages/types/src/domains/inventory/InvSupplier";

export class InvSupplierService {
  private repository = new Map<string, InvSupplierData>();

  public create(data: Omit<InvSupplierData, "id" | "createdAt" | "updatedAt">): InvSupplierData {
    const id = "inv_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: InvSupplierData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = InvSupplierValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InvSupplier: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InvSupplierData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): InvSupplierData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<InvSupplierData>): InvSupplierData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InvSupplierData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
