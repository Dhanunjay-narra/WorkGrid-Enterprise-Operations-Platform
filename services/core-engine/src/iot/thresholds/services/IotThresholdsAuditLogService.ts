import { IotThresholdsAuditLogModel, IotThresholdsAuditLogValidator } from "@nexora/types/domains/iot/thresholds/IotThresholdsAuditLog";

export class IotThresholdsAuditLogService {
  private repository = new Map<string, IotThresholdsAuditLogModel>();

  public create(data: Omit<IotThresholdsAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): IotThresholdsAuditLogModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotThresholdsAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotThresholdsAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotThresholdsAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotThresholdsAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotThresholdsAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotThresholdsAuditLogModel>): IotThresholdsAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotThresholdsAuditLogModel = {
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
