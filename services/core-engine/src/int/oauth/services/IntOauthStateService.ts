import { IntOauthStateModel, IntOauthStateValidator } from "@nexora/types/domains/int/oauth/IntOauthState";

export class IntOauthStateService {
  private repository = new Map<string, IntOauthStateModel>();

  public create(data: Omit<IntOauthStateModel, "id" | "version" | "createdAt" | "updatedAt">): IntOauthStateModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntOauthStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntOauthStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntOauthState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntOauthStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntOauthStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntOauthStateModel>): IntOauthStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntOauthStateModel = {
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
