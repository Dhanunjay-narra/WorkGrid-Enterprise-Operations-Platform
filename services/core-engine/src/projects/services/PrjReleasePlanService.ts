import { PrjReleasePlanData, PrjReleasePlanValidator } from "../../../../packages/types/src/domains/projects/PrjReleasePlan";

export class PrjReleasePlanService {
  private repository = new Map<string, PrjReleasePlanData>();

  public create(data: Omit<PrjReleasePlanData, "id" | "createdAt" | "updatedAt">): PrjReleasePlanData {
    const id = "pro_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: PrjReleasePlanData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = PrjReleasePlanValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for PrjReleasePlan: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): PrjReleasePlanData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): PrjReleasePlanData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<PrjReleasePlanData>): PrjReleasePlanData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: PrjReleasePlanData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
