import { IdentityConfigModel, IdentityConfigValidator } from "@nexora/types/domains/identity/IdentityConfig";

export class IdentityConfigService {
  private repository = new Map<string, IdentityConfigModel>();

  public create(data: Omit<IdentityConfigModel, "id" | "version" | "createdAt" | "updatedAt">): IdentityConfigModel {
    const id = "iden_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IdentityConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdentityConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdentityConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdentityConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IdentityConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IdentityConfigModel>): IdentityConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdentityConfigModel = {
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
