import { BiCohortGroupData, BiCohortGroupValidator } from "../../../../packages/types/src/domains/analytics/BiCohortGroup";

export class BiCohortGroupService {
  private repository = new Map<string, BiCohortGroupData>();

  public create(data: Omit<BiCohortGroupData, "id" | "createdAt" | "updatedAt">): BiCohortGroupData {
    const id = "ana_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: BiCohortGroupData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiCohortGroupValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiCohortGroup: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiCohortGroupData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): BiCohortGroupData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<BiCohortGroupData>): BiCohortGroupData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiCohortGroupData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
