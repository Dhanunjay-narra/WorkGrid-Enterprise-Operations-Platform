import { IntOauthNodeModel, IntOauthNodeValidator } from "@nexora/types/domains/int/oauth/IntOauthNode";

export class IntOauthNodeService {
  private repository = new Map<string, IntOauthNodeModel>();

  public create(data: Omit<IntOauthNodeModel, "id" | "version" | "createdAt" | "updatedAt">): IntOauthNodeModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntOauthNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntOauthNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntOauthNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntOauthNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntOauthNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntOauthNodeModel>): IntOauthNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntOauthNodeModel = {
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
