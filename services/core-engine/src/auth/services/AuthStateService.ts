import { AuthStateModel, AuthStateValidator } from "@nexora/types/domains/auth/AuthState";

export class AuthStateService {
  private repository = new Map<string, AuthStateModel>();

  public create(data: Omit<AuthStateModel, "id" | "version" | "createdAt" | "updatedAt">): AuthStateModel {
    const id = "auth_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuthStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuthStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuthState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuthStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuthStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuthStateModel>): AuthStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuthStateModel = {
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
