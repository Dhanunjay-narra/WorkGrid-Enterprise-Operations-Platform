import { PrjWorkloadCapacityData, PrjWorkloadCapacityValidator } from "../../../../packages/types/src/domains/projects/PrjWorkloadCapacity";

export class PrjWorkloadCapacityService {
  private repository = new Map<string, PrjWorkloadCapacityData>();

  public create(data: Omit<PrjWorkloadCapacityData, "id" | "createdAt" | "updatedAt">): PrjWorkloadCapacityData {
    const id = "pro_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: PrjWorkloadCapacityData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = PrjWorkloadCapacityValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for PrjWorkloadCapacity: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): PrjWorkloadCapacityData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): PrjWorkloadCapacityData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<PrjWorkloadCapacityData>): PrjWorkloadCapacityData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: PrjWorkloadCapacityData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
