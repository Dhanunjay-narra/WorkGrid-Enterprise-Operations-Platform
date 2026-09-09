import { RbacProfileModel, RbacProfileValidator } from "@nexora/types/domains/rbac/RbacProfile";

export class RbacProfileService {
  private repository = new Map<string, RbacProfileModel>();

  public create(data: Omit<RbacProfileModel, "id" | "version" | "createdAt" | "updatedAt">): RbacProfileModel {
    const id = "rbac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: RbacProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = RbacProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for RbacProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): RbacProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: RbacProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<RbacProfileModel>): RbacProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: RbacProfileModel = {
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
