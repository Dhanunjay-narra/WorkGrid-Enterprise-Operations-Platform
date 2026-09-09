import { IotLocationsAuditLogModel, IotLocationsAuditLogValidator } from "@nexora/types/domains/iot/locations/IotLocationsAuditLog";

export class IotLocationsAuditLogService {
  private repository = new Map<string, IotLocationsAuditLogModel>();

  public create(data: Omit<IotLocationsAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): IotLocationsAuditLogModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotLocationsAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotLocationsAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotLocationsAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotLocationsAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotLocationsAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotLocationsAuditLogModel>): IotLocationsAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotLocationsAuditLogModel = {
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
