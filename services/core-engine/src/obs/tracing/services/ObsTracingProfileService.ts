import { ObsTracingProfileModel, ObsTracingProfileValidator } from "@nexora/types/domains/obs/tracing/ObsTracingProfile";

export class ObsTracingProfileService {
  private repository = new Map<string, ObsTracingProfileModel>();

  public create(data: Omit<ObsTracingProfileModel, "id" | "version" | "createdAt" | "updatedAt">): ObsTracingProfileModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsTracingProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsTracingProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsTracingProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsTracingProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsTracingProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsTracingProfileModel>): ObsTracingProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsTracingProfileModel = {
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
