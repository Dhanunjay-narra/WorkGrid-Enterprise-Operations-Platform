import { BiAnomaliesAuditLogModel, BiAnomaliesAuditLogValidator } from "@nexora/types/domains/bi/anomalies/BiAnomaliesAuditLog";

export class BiAnomaliesAuditLogService {
  private repository = new Map<string, BiAnomaliesAuditLogModel>();

  public create(data: Omit<BiAnomaliesAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): BiAnomaliesAuditLogModel {
    const id = "bi_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiAnomaliesAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiAnomaliesAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiAnomaliesAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiAnomaliesAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiAnomaliesAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiAnomaliesAuditLogModel>): BiAnomaliesAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiAnomaliesAuditLogModel = {
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
