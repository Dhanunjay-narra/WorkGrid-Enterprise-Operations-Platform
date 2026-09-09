import { BiKpisAuditLogModel, BiKpisAuditLogValidator } from "@nexora/types/domains/bi/kpis/BiKpisAuditLog";

export class BiKpisAuditLogService {
  private repository = new Map<string, BiKpisAuditLogModel>();

  public create(data: Omit<BiKpisAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): BiKpisAuditLogModel {
    const id = "bi_k_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiKpisAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiKpisAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiKpisAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiKpisAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiKpisAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiKpisAuditLogModel>): BiKpisAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiKpisAuditLogModel = {
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
