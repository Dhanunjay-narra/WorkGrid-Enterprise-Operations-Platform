import { IotDevicesAuditLogModel, IotDevicesAuditLogValidator } from "@nexora/types/domains/iot/devices/IotDevicesAuditLog";

export class IotDevicesAuditLogService {
  private repository = new Map<string, IotDevicesAuditLogModel>();

  public create(data: Omit<IotDevicesAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): IotDevicesAuditLogModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotDevicesAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotDevicesAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotDevicesAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotDevicesAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotDevicesAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotDevicesAuditLogModel>): IotDevicesAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotDevicesAuditLogModel = {
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
