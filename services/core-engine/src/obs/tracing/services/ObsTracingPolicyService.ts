import { ObsTracingPolicyModel, ObsTracingPolicyValidator } from "@nexora/types/domains/obs/tracing/ObsTracingPolicy";

export class ObsTracingPolicyService {
  private repository = new Map<string, ObsTracingPolicyModel>();

  public create(data: Omit<ObsTracingPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): ObsTracingPolicyModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsTracingPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsTracingPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsTracingPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsTracingPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsTracingPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsTracingPolicyModel>): ObsTracingPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsTracingPolicyModel = {
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
