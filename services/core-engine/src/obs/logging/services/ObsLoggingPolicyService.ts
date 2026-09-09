import { ObsLoggingPolicyModel, ObsLoggingPolicyValidator } from "@nexora/types/domains/obs/logging/ObsLoggingPolicy";

export class ObsLoggingPolicyService {
  private repository = new Map<string, ObsLoggingPolicyModel>();

  public create(data: Omit<ObsLoggingPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): ObsLoggingPolicyModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsLoggingPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsLoggingPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsLoggingPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsLoggingPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsLoggingPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsLoggingPolicyModel>): ObsLoggingPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsLoggingPolicyModel = {
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
