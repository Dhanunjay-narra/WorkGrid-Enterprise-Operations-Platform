import { RbacEntryModel, RbacEntryValidator } from "@nexora/types/domains/rbac/RbacEntry";

export class RbacEntryService {
  private repository = new Map<string, RbacEntryModel>();

  public create(data: Omit<RbacEntryModel, "id" | "version" | "createdAt" | "updatedAt">): RbacEntryModel {
    const id = "rbac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: RbacEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = RbacEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for RbacEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): RbacEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: RbacEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<RbacEntryModel>): RbacEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: RbacEntryModel = {
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
