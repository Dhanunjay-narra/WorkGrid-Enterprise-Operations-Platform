import { IotTelemetryPacketData, IotTelemetryPacketValidator } from "../../../../packages/types/src/domains/iot/IotTelemetryPacket";

export class IotTelemetryPacketService {
  private repository = new Map<string, IotTelemetryPacketData>();

  public create(data: Omit<IotTelemetryPacketData, "id" | "createdAt" | "updatedAt">): IotTelemetryPacketData {
    const id = "iot_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IotTelemetryPacketData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotTelemetryPacketValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotTelemetryPacket: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotTelemetryPacketData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IotTelemetryPacketData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IotTelemetryPacketData>): IotTelemetryPacketData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotTelemetryPacketData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
