import { IotFirmwareAuditLogModel, IotFirmwareAuditLogValidator } from "@nexora/types/domains/iot/firmware/IotFirmwareAuditLog";

export class IotFirmwareAuditLogService {
  private repository = new Map<string, IotFirmwareAuditLogModel>();

  public create(data: Omit<IotFirmwareAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): IotFirmwareAuditLogModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFirmwareAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFirmwareAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFirmwareAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFirmwareAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFirmwareAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFirmwareAuditLogModel>): IotFirmwareAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFirmwareAuditLogModel = {
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
