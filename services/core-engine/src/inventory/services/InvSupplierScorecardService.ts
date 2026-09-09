import { InvSupplierScorecardData, InvSupplierScorecardValidator } from "../../../../packages/types/src/domains/inventory/InvSupplierScorecard";

export class InvSupplierScorecardService {
  private repository = new Map<string, InvSupplierScorecardData>();

  public create(data: Omit<InvSupplierScorecardData, "id" | "createdAt" | "updatedAt">): InvSupplierScorecardData {
    const id = "inv_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: InvSupplierScorecardData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = InvSupplierScorecardValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InvSupplierScorecard: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InvSupplierScorecardData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): InvSupplierScorecardData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<InvSupplierScorecardData>): InvSupplierScorecardData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InvSupplierScorecardData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
