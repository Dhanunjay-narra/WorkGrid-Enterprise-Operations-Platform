import { AuthConfigModel, AuthConfigValidator } from "@nexora/types/domains/auth/AuthConfig";

export class AuthConfigService {
  private repository = new Map<string, AuthConfigModel>();

  public create(data: Omit<AuthConfigModel, "id" | "version" | "createdAt" | "updatedAt">): AuthConfigModel {
    const id = "auth_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuthConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuthConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuthConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuthConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuthConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuthConfigModel>): AuthConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuthConfigModel = {
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
