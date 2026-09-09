import { IotHeartbeatRecordData, IotHeartbeatRecordValidator } from "../../../../packages/types/src/domains/iot/IotHeartbeatRecord";

export class IotHeartbeatRecordService {
  private repository = new Map<string, IotHeartbeatRecordData>();

  public create(data: Omit<IotHeartbeatRecordData, "id" | "createdAt" | "updatedAt">): IotHeartbeatRecordData {
    const id = "iot_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IotHeartbeatRecordData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotHeartbeatRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotHeartbeatRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotHeartbeatRecordData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IotHeartbeatRecordData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IotHeartbeatRecordData>): IotHeartbeatRecordData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotHeartbeatRecordData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
