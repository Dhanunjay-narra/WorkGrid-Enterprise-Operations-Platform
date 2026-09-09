import { ObsProbesThresholdModel, ObsProbesThresholdValidator } from "@nexora/types/domains/obs/probes/ObsProbesThreshold";

export class ObsProbesThresholdService {
  private repository = new Map<string, ObsProbesThresholdModel>();

  public create(data: Omit<ObsProbesThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProbesThresholdModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProbesThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProbesThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProbesThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProbesThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProbesThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProbesThresholdModel>): ObsProbesThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProbesThresholdModel = {
      ...existing,
      ...updates,
      version: existing.version + 1,
      updatedAt: new Date().toISOString()
    };
    this.repository.set(id, updated);
    return updated;
  }

  public remove(id: string): boolean {
    return this.repository.delete(id);
  }
}
