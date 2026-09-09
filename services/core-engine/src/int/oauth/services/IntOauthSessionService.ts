import { IntOauthSessionModel, IntOauthSessionValidator } from "@nexora/types/domains/int/oauth/IntOauthSession";

export class IntOauthSessionService {
  private repository = new Map<string, IntOauthSessionModel>();

  public create(data: Omit<IntOauthSessionModel, "id" | "version" | "createdAt" | "updatedAt">): IntOauthSessionModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntOauthSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntOauthSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntOauthSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntOauthSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntOauthSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntOauthSessionModel>): IntOauthSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntOauthSessionModel = {
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
