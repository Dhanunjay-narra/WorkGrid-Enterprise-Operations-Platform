import { ObsSpansPolicyModel, ObsSpansPolicyValidator } from "@nexora/types/domains/obs/spans/ObsSpansPolicy";

export class ObsSpansPolicyService {
  private repository = new Map<string, ObsSpansPolicyModel>();

  public create(data: Omit<ObsSpansPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): ObsSpansPolicyModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsSpansPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsSpansPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsSpansPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsSpansPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsSpansPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsSpansPolicyModel>): ObsSpansPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsSpansPolicyModel = {
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
