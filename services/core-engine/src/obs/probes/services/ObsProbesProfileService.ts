import { ObsProbesProfileModel, ObsProbesProfileValidator } from "@nexora/types/domains/obs/probes/ObsProbesProfile";

export class ObsProbesProfileService {
  private repository = new Map<string, ObsProbesProfileModel>();

  public create(data: Omit<ObsProbesProfileModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProbesProfileModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProbesProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProbesProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProbesProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProbesProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProbesProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProbesProfileModel>): ObsProbesProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProbesProfileModel = {
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
