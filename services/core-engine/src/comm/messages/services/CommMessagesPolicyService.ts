import { CommMessagesPolicyModel, CommMessagesPolicyValidator } from "@nexora/types/domains/comm/messages/CommMessagesPolicy";

export class CommMessagesPolicyService {
  private repository = new Map<string, CommMessagesPolicyModel>();

  public create(data: Omit<CommMessagesPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): CommMessagesPolicyModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommMessagesPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommMessagesPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommMessagesPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommMessagesPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommMessagesPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommMessagesPolicyModel>): CommMessagesPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommMessagesPolicyModel = {
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
