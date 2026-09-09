import { ObsProfilingPolicyModel, ObsProfilingPolicyValidator } from "@nexora/types/domains/obs/profiling/ObsProfilingPolicy";

export class ObsProfilingPolicyService {
  private repository = new Map<string, ObsProfilingPolicyModel>();

  public create(data: Omit<ObsProfilingPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProfilingPolicyModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProfilingPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProfilingPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProfilingPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProfilingPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProfilingPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProfilingPolicyModel>): ObsProfilingPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProfilingPolicyModel = {
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
