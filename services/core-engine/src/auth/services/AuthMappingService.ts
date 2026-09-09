import { AuthMappingModel, AuthMappingValidator } from "@nexora/types/domains/auth/AuthMapping";

export class AuthMappingService {
  private repository = new Map<string, AuthMappingModel>();

  public create(data: Omit<AuthMappingModel, "id" | "version" | "createdAt" | "updatedAt">): AuthMappingModel {
    const id = "auth_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuthMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuthMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuthMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuthMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuthMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuthMappingModel>): AuthMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuthMappingModel = {
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
