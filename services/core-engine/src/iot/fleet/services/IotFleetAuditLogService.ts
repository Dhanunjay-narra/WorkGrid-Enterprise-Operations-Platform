import { IotFleetAuditLogModel, IotFleetAuditLogValidator } from "@nexora/types/domains/iot/fleet/IotFleetAuditLog";

export class IotFleetAuditLogService {
  private repository = new Map<string, IotFleetAuditLogModel>();

  public create(data: Omit<IotFleetAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): IotFleetAuditLogModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFleetAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFleetAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFleetAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFleetAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFleetAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFleetAuditLogModel>): IotFleetAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFleetAuditLogModel = {
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
