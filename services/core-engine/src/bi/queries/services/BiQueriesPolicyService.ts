import { BiQueriesPolicyModel, BiQueriesPolicyValidator } from "@nexora/types/domains/bi/queries/BiQueriesPolicy";

export class BiQueriesPolicyService {
  private repository = new Map<string, BiQueriesPolicyModel>();

  public create(data: Omit<BiQueriesPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): BiQueriesPolicyModel {
    const id = "bi_q_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiQueriesPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiQueriesPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiQueriesPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiQueriesPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiQueriesPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiQueriesPolicyModel>): BiQueriesPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiQueriesPolicyModel = {
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
