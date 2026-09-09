import { ObsLoggingProfileModel, ObsLoggingProfileValidator } from "@nexora/types/domains/obs/logging/ObsLoggingProfile";

export class ObsLoggingProfileService {
  private repository = new Map<string, ObsLoggingProfileModel>();

  public create(data: Omit<ObsLoggingProfileModel, "id" | "version" | "createdAt" | "updatedAt">): ObsLoggingProfileModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsLoggingProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsLoggingProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsLoggingProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsLoggingProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsLoggingProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsLoggingProfileModel>): ObsLoggingProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsLoggingProfileModel = {
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
