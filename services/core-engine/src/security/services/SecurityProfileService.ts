import { SecurityProfileModel, SecurityProfileValidator } from "@nexora/types/domains/security/SecurityProfile";

export class SecurityProfileService {
  private repository = new Map<string, SecurityProfileModel>();

  public create(data: Omit<SecurityProfileModel, "id" | "version" | "createdAt" | "updatedAt">): SecurityProfileModel {
    const id = "secu_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SecurityProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SecurityProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SecurityProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SecurityProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SecurityProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SecurityProfileModel>): SecurityProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SecurityProfileModel = {
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
