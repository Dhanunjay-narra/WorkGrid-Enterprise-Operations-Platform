import { AuthSummaryModel, AuthSummaryValidator } from "@nexora/types/domains/auth/AuthSummary";

export class AuthSummaryService {
  private repository = new Map<string, AuthSummaryModel>();

  public create(data: Omit<AuthSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): AuthSummaryModel {
    const id = "auth_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuthSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuthSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuthSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuthSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuthSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuthSummaryModel>): AuthSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuthSummaryModel = {
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
