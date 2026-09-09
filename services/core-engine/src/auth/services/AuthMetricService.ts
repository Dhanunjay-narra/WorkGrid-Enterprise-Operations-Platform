import { AuthMetricModel, AuthMetricValidator } from "@nexora/types/domains/auth/AuthMetric";

export class AuthMetricService {
  private repository = new Map<string, AuthMetricModel>();

  public create(data: Omit<AuthMetricModel, "id" | "version" | "createdAt" | "updatedAt">): AuthMetricModel {
    const id = "auth_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuthMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuthMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuthMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuthMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuthMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuthMetricModel>): AuthMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuthMetricModel = {
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
