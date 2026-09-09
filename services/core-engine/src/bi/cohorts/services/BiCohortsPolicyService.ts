import { BiCohortsPolicyModel, BiCohortsPolicyValidator } from "@nexora/types/domains/bi/cohorts/BiCohortsPolicy";

export class BiCohortsPolicyService {
  private repository = new Map<string, BiCohortsPolicyModel>();

  public create(data: Omit<BiCohortsPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): BiCohortsPolicyModel {
    const id = "bi_c_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiCohortsPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiCohortsPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiCohortsPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiCohortsPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiCohortsPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiCohortsPolicyModel>): BiCohortsPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiCohortsPolicyModel = {
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
