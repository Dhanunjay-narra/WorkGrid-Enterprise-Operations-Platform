import { IntStripeAuditLogModel, IntStripeAuditLogValidator } from "@nexora/types/domains/int/stripe/IntStripeAuditLog";

export class IntStripeAuditLogService {
  private repository = new Map<string, IntStripeAuditLogModel>();

  public create(data: Omit<IntStripeAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): IntStripeAuditLogModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntStripeAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntStripeAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntStripeAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntStripeAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntStripeAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntStripeAuditLogModel>): IntStripeAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntStripeAuditLogModel = {
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
