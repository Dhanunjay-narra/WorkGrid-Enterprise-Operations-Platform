import { ObsProbesMappingModel, ObsProbesMappingValidator } from "@nexora/types/domains/obs/probes/ObsProbesMapping";

export class ObsProbesMappingService {
  private repository = new Map<string, ObsProbesMappingModel>();

  public create(data: Omit<ObsProbesMappingModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProbesMappingModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProbesMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProbesMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProbesMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProbesMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProbesMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProbesMappingModel>): ObsProbesMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProbesMappingModel = {
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
