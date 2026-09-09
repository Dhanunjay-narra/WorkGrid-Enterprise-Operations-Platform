import { IotSensorCalibrationData, IotSensorCalibrationValidator } from "../../../../packages/types/src/domains/iot/IotSensorCalibration";

export class IotSensorCalibrationService {
  private repository = new Map<string, IotSensorCalibrationData>();

  public create(data: Omit<IotSensorCalibrationData, "id" | "createdAt" | "updatedAt">): IotSensorCalibrationData {
    const id = "iot_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IotSensorCalibrationData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotSensorCalibrationValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotSensorCalibration: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotSensorCalibrationData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IotSensorCalibrationData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IotSensorCalibrationData>): IotSensorCalibrationData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotSensorCalibrationData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
