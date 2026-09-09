import { IntMappingsAuditLogModel, IntMappingsAuditLogValidator } from "@nexora/types/domains/int/mappings/IntMappingsAuditLog";

export class IntMappingsAuditLogService {
  private repository = new Map<string, IntMappingsAuditLogModel>();

  public create(data: Omit<IntMappingsAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): IntMappingsAuditLogModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntMappingsAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntMappingsAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntMappingsAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntMappingsAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntMappingsAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntMappingsAuditLogModel>): IntMappingsAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntMappingsAuditLogModel = {
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
