import { SecurityNodeModel, SecurityNodeValidator } from "@nexora/types/domains/security/SecurityNode";

export class SecurityNodeService {
  private repository = new Map<string, SecurityNodeModel>();

  public create(data: Omit<SecurityNodeModel, "id" | "version" | "createdAt" | "updatedAt">): SecurityNodeModel {
    const id = "secu_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SecurityNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SecurityNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SecurityNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SecurityNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SecurityNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SecurityNodeModel>): SecurityNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SecurityNodeModel = {
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
