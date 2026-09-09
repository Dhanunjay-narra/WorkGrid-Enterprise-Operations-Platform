import { BiDrilldownFilterData, BiDrilldownFilterValidator } from "../../../../packages/types/src/domains/analytics/BiDrilldownFilter";

export class BiDrilldownFilterService {
  private repository = new Map<string, BiDrilldownFilterData>();

  public create(data: Omit<BiDrilldownFilterData, "id" | "createdAt" | "updatedAt">): BiDrilldownFilterData {
    const id = "ana_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: BiDrilldownFilterData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiDrilldownFilterValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiDrilldownFilter: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiDrilldownFilterData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): BiDrilldownFilterData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<BiDrilldownFilterData>): BiDrilldownFilterData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiDrilldownFilterData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
