import { AuditEventModel, AuditEventValidator } from "@nexora/types/domains/audit/AuditEvent";

export class AuditEventService {
  private repository = new Map<string, AuditEventModel>();

  public create(data: Omit<AuditEventModel, "id" | "version" | "createdAt" | "updatedAt">): AuditEventModel {
    const id = "audi_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuditEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuditEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuditEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuditEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuditEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuditEventModel>): AuditEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuditEventModel = {
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
