import { CommThreadsPolicyModel, CommThreadsPolicyValidator } from "@nexora/types/domains/comm/threads/CommThreadsPolicy";

export class CommThreadsPolicyService {
  private repository = new Map<string, CommThreadsPolicyModel>();

  public create(data: Omit<CommThreadsPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): CommThreadsPolicyModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommThreadsPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommThreadsPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommThreadsPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommThreadsPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommThreadsPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommThreadsPolicyModel>): CommThreadsPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommThreadsPolicyModel = {
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
