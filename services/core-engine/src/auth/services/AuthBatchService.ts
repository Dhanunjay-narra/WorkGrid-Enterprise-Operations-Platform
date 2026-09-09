import { AuthBatchModel, AuthBatchValidator } from "@nexora/types/domains/auth/AuthBatch";

export class AuthBatchService {
  private repository = new Map<string, AuthBatchModel>();

  public create(data: Omit<AuthBatchModel, "id" | "version" | "createdAt" | "updatedAt">): AuthBatchModel {
    const id = "auth_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuthBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuthBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuthBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuthBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuthBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuthBatchModel>): AuthBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuthBatchModel = {
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
