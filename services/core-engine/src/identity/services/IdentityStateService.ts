import { IdentityStateModel, IdentityStateValidator } from "@nexora/types/domains/identity/IdentityState";

export class IdentityStateService {
  private repository = new Map<string, IdentityStateModel>();

  public create(data: Omit<IdentityStateModel, "id" | "version" | "createdAt" | "updatedAt">): IdentityStateModel {
    const id = "iden_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IdentityStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdentityStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdentityState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdentityStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IdentityStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IdentityStateModel>): IdentityStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdentityStateModel = {
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
