import { ObsProbesBatchModel, ObsProbesBatchValidator } from "@nexora/types/domains/obs/probes/ObsProbesBatch";

export class ObsProbesBatchService {
  private repository = new Map<string, ObsProbesBatchModel>();

  public create(data: Omit<ObsProbesBatchModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProbesBatchModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProbesBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProbesBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProbesBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProbesBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProbesBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProbesBatchModel>): ObsProbesBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProbesBatchModel = {
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
