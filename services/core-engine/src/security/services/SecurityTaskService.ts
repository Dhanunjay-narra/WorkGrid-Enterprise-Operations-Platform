import { SecurityTaskModel, SecurityTaskValidator } from "@nexora/types/domains/security/SecurityTask";

export class SecurityTaskService {
  private repository = new Map<string, SecurityTaskModel>();

  public create(data: Omit<SecurityTaskModel, "id" | "version" | "createdAt" | "updatedAt">): SecurityTaskModel {
    const id = "secu_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SecurityTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SecurityTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SecurityTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SecurityTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SecurityTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SecurityTaskModel>): SecurityTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SecurityTaskModel = {
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
