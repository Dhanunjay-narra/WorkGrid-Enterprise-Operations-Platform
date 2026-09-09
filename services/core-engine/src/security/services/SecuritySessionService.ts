import { SecuritySessionModel, SecuritySessionValidator } from "@nexora/types/domains/security/SecuritySession";

export class SecuritySessionService {
  private repository = new Map<string, SecuritySessionModel>();

  public create(data: Omit<SecuritySessionModel, "id" | "version" | "createdAt" | "updatedAt">): SecuritySessionModel {
    const id = "secu_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SecuritySessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SecuritySessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SecuritySession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SecuritySessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SecuritySessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SecuritySessionModel>): SecuritySessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SecuritySessionModel = {
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
