import { IotAnomaliesAuditLogModel, IotAnomaliesAuditLogValidator } from "@nexora/types/domains/iot/anomalies/IotAnomaliesAuditLog";

export class IotAnomaliesAuditLogService {
  private repository = new Map<string, IotAnomaliesAuditLogModel>();

  public create(data: Omit<IotAnomaliesAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): IotAnomaliesAuditLogModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotAnomaliesAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotAnomaliesAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotAnomaliesAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotAnomaliesAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotAnomaliesAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotAnomaliesAuditLogModel>): IotAnomaliesAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotAnomaliesAuditLogModel = {
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
