import { PrjMilestoneData, PrjMilestoneValidator } from "../../../../packages/types/src/domains/projects/PrjMilestone";

export class PrjMilestoneService {
  private repository = new Map<string, PrjMilestoneData>();

  public create(data: Omit<PrjMilestoneData, "id" | "createdAt" | "updatedAt">): PrjMilestoneData {
    const id = "pro_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: PrjMilestoneData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = PrjMilestoneValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for PrjMilestone: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): PrjMilestoneData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): PrjMilestoneData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<PrjMilestoneData>): PrjMilestoneData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: PrjMilestoneData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
