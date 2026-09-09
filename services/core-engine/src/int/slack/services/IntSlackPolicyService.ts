import { IntSlackPolicyModel, IntSlackPolicyValidator } from "@nexora/types/domains/int/slack/IntSlackPolicy";

export class IntSlackPolicyService {
  private repository = new Map<string, IntSlackPolicyModel>();

  public create(data: Omit<IntSlackPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): IntSlackPolicyModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSlackPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSlackPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSlackPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSlackPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSlackPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSlackPolicyModel>): IntSlackPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSlackPolicyModel = {
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
