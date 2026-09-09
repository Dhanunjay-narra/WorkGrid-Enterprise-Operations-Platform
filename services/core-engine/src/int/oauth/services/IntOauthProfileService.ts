import { IntOauthProfileModel, IntOauthProfileValidator } from "@nexora/types/domains/int/oauth/IntOauthProfile";

export class IntOauthProfileService {
  private repository = new Map<string, IntOauthProfileModel>();

  public create(data: Omit<IntOauthProfileModel, "id" | "version" | "createdAt" | "updatedAt">): IntOauthProfileModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntOauthProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntOauthProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntOauthProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntOauthProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntOauthProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntOauthProfileModel>): IntOauthProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntOauthProfileModel = {
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
