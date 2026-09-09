import { SecurityConfigModel, SecurityConfigValidator } from "@nexora/types/domains/security/SecurityConfig";

export class SecurityConfigService {
  private repository = new Map<string, SecurityConfigModel>();

  public create(data: Omit<SecurityConfigModel, "id" | "version" | "createdAt" | "updatedAt">): SecurityConfigModel {
    const id = "secu_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SecurityConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SecurityConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SecurityConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SecurityConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SecurityConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SecurityConfigModel>): SecurityConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SecurityConfigModel = {
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
