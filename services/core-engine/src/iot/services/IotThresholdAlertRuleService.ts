import { IotThresholdAlertRuleData, IotThresholdAlertRuleValidator } from "../../../../packages/types/src/domains/iot/IotThresholdAlertRule";

export class IotThresholdAlertRuleService {
  private repository = new Map<string, IotThresholdAlertRuleData>();

  public create(data: Omit<IotThresholdAlertRuleData, "id" | "createdAt" | "updatedAt">): IotThresholdAlertRuleData {
    const id = "iot_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IotThresholdAlertRuleData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotThresholdAlertRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotThresholdAlertRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotThresholdAlertRuleData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IotThresholdAlertRuleData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IotThresholdAlertRuleData>): IotThresholdAlertRuleData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotThresholdAlertRuleData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
