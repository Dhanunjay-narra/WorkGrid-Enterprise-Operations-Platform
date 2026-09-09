import { IotCommandsAuditLogModel, IotCommandsAuditLogValidator } from "@nexora/types/domains/iot/commands/IotCommandsAuditLog";

export class IotCommandsAuditLogService {
  private repository = new Map<string, IotCommandsAuditLogModel>();

  public create(data: Omit<IotCommandsAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): IotCommandsAuditLogModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotCommandsAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotCommandsAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotCommandsAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotCommandsAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotCommandsAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotCommandsAuditLogModel>): IotCommandsAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotCommandsAuditLogModel = {
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
