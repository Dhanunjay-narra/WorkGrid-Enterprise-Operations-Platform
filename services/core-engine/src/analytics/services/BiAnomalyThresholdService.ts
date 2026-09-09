import { BiAnomalyThresholdData, BiAnomalyThresholdValidator } from "../../../../packages/types/src/domains/analytics/BiAnomalyThreshold";

export class BiAnomalyThresholdService {
  private repository = new Map<string, BiAnomalyThresholdData>();

  public create(data: Omit<BiAnomalyThresholdData, "id" | "createdAt" | "updatedAt">): BiAnomalyThresholdData {
    const id = "ana_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: BiAnomalyThresholdData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiAnomalyThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiAnomalyThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiAnomalyThresholdData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): BiAnomalyThresholdData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<BiAnomalyThresholdData>): BiAnomalyThresholdData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiAnomalyThresholdData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
