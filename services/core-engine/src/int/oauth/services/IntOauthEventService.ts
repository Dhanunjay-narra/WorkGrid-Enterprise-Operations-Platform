import { IntOauthEventModel, IntOauthEventValidator } from "@nexora/types/domains/int/oauth/IntOauthEvent";

export class IntOauthEventService {
  private repository = new Map<string, IntOauthEventModel>();

  public create(data: Omit<IntOauthEventModel, "id" | "version" | "createdAt" | "updatedAt">): IntOauthEventModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntOauthEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntOauthEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntOauthEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntOauthEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntOauthEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntOauthEventModel>): IntOauthEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntOauthEventModel = {
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
