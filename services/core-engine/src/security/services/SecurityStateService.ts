import { SecurityStateModel, SecurityStateValidator } from "@nexora/types/domains/security/SecurityState";

export class SecurityStateService {
  private repository = new Map<string, SecurityStateModel>();

  public create(data: Omit<SecurityStateModel, "id" | "version" | "createdAt" | "updatedAt">): SecurityStateModel {
    const id = "secu_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SecurityStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SecurityStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SecurityState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SecurityStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SecurityStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SecurityStateModel>): SecurityStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SecurityStateModel = {
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
