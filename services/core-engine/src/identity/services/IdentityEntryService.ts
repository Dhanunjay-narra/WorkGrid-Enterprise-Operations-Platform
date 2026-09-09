import { IdentityEntryModel, IdentityEntryValidator } from "@nexora/types/domains/identity/IdentityEntry";

export class IdentityEntryService {
  private repository = new Map<string, IdentityEntryModel>();

  public create(data: Omit<IdentityEntryModel, "id" | "version" | "createdAt" | "updatedAt">): IdentityEntryModel {
    const id = "iden_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IdentityEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdentityEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdentityEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdentityEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IdentityEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IdentityEntryModel>): IdentityEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdentityEntryModel = {
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
