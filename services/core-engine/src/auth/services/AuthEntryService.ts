import { AuthEntryModel, AuthEntryValidator } from "@nexora/types/domains/auth/AuthEntry";

export class AuthEntryService {
  private repository = new Map<string, AuthEntryModel>();

  public create(data: Omit<AuthEntryModel, "id" | "version" | "createdAt" | "updatedAt">): AuthEntryModel {
    const id = "auth_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuthEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuthEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuthEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuthEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuthEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuthEntryModel>): AuthEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuthEntryModel = {
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
