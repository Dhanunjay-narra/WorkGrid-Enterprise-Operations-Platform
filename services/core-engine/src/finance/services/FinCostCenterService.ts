import { FinCostCenterData, FinCostCenterValidator } from "../../../../packages/types/src/domains/finance/FinCostCenter";

export class FinCostCenterService {
  private repository = new Map<string, FinCostCenterData>();

  public create(data: Omit<FinCostCenterData, "id" | "createdAt" | "updatedAt">): FinCostCenterData {
    const id = "fin_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: FinCostCenterData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = FinCostCenterValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for FinCostCenter: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): FinCostCenterData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): FinCostCenterData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<FinCostCenterData>): FinCostCenterData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: FinCostCenterData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
