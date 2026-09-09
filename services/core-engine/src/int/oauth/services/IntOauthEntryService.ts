import { IntOauthEntryModel, IntOauthEntryValidator } from "@nexora/types/domains/int/oauth/IntOauthEntry";

export class IntOauthEntryService {
  private repository = new Map<string, IntOauthEntryModel>();

  public create(data: Omit<IntOauthEntryModel, "id" | "version" | "createdAt" | "updatedAt">): IntOauthEntryModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntOauthEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntOauthEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntOauthEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntOauthEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntOauthEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntOauthEntryModel>): IntOauthEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntOauthEntryModel = {
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
