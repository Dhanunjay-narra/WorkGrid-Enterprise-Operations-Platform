import { SecurityEventModel, SecurityEventValidator } from "@nexora/types/domains/security/SecurityEvent";

export class SecurityEventService {
  private repository = new Map<string, SecurityEventModel>();

  public create(data: Omit<SecurityEventModel, "id" | "version" | "createdAt" | "updatedAt">): SecurityEventModel {
    const id = "secu_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SecurityEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SecurityEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SecurityEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SecurityEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SecurityEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SecurityEventModel>): SecurityEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SecurityEventModel = {
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
