import { AuthSessionModel, AuthSessionValidator } from "@nexora/types/domains/auth/AuthSession";

export class AuthSessionService {
  private repository = new Map<string, AuthSessionModel>();

  public create(data: Omit<AuthSessionModel, "id" | "version" | "createdAt" | "updatedAt">): AuthSessionModel {
    const id = "auth_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuthSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuthSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuthSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuthSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuthSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuthSessionModel>): AuthSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuthSessionModel = {
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
