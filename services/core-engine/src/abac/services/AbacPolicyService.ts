import { AbacPolicyModel, AbacPolicyValidator } from "@nexora/types/domains/abac/AbacPolicy";

export class AbacPolicyService {
  private repository = new Map<string, AbacPolicyModel>();

  public create(data: Omit<AbacPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): AbacPolicyModel {
    const id = "abac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AbacPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AbacPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AbacPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AbacPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AbacPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AbacPolicyModel>): AbacPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AbacPolicyModel = {
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
