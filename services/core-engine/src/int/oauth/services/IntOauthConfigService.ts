import { IntOauthConfigModel, IntOauthConfigValidator } from "@nexora/types/domains/int/oauth/IntOauthConfig";

export class IntOauthConfigService {
  private repository = new Map<string, IntOauthConfigModel>();

  public create(data: Omit<IntOauthConfigModel, "id" | "version" | "createdAt" | "updatedAt">): IntOauthConfigModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntOauthConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntOauthConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntOauthConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntOauthConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntOauthConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntOauthConfigModel>): IntOauthConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntOauthConfigModel = {
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
