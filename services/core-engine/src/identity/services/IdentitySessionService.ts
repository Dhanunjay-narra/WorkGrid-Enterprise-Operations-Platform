import { IdentitySessionModel, IdentitySessionValidator } from "@nexora/types/domains/identity/IdentitySession";

export class IdentitySessionService {
  private repository = new Map<string, IdentitySessionModel>();

  public create(data: Omit<IdentitySessionModel, "id" | "version" | "createdAt" | "updatedAt">): IdentitySessionModel {
    const id = "iden_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IdentitySessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdentitySessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdentitySession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdentitySessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IdentitySessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IdentitySessionModel>): IdentitySessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdentitySessionModel = {
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
