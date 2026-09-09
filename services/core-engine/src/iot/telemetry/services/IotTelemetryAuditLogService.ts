import { IotTelemetryAuditLogModel, IotTelemetryAuditLogValidator } from "@nexora/types/domains/iot/telemetry/IotTelemetryAuditLog";

export class IotTelemetryAuditLogService {
  private repository = new Map<string, IotTelemetryAuditLogModel>();

  public create(data: Omit<IotTelemetryAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): IotTelemetryAuditLogModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotTelemetryAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotTelemetryAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotTelemetryAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotTelemetryAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotTelemetryAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotTelemetryAuditLogModel>): IotTelemetryAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotTelemetryAuditLogModel = {
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
