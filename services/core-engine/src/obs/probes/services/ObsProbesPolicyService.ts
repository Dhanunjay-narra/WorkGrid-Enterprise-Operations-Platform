import { ObsProbesPolicyModel, ObsProbesPolicyValidator } from "@nexora/types/domains/obs/probes/ObsProbesPolicy";

export class ObsProbesPolicyService {
  private repository = new Map<string, ObsProbesPolicyModel>();

  public create(data: Omit<ObsProbesPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProbesPolicyModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProbesPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProbesPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProbesPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProbesPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProbesPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProbesPolicyModel>): ObsProbesPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProbesPolicyModel = {
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
