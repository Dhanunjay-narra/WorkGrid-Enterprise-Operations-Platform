import { IotAnomalyAlertData, IotAnomalyAlertValidator } from "../../../../packages/types/src/domains/iot/IotAnomalyAlert";

export class IotAnomalyAlertService {
  private repository = new Map<string, IotAnomalyAlertData>();

  public create(data: Omit<IotAnomalyAlertData, "id" | "createdAt" | "updatedAt">): IotAnomalyAlertData {
    const id = "iot_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IotAnomalyAlertData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotAnomalyAlertValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotAnomalyAlert: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotAnomalyAlertData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IotAnomalyAlertData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IotAnomalyAlertData>): IotAnomalyAlertData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotAnomalyAlertData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
