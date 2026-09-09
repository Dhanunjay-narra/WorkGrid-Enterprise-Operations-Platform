import { IotDevicesRuleModel, IotDevicesRuleValidator } from "@nexora/types/domains/iot/devices/IotDevicesRule";

export class IotDevicesRuleService {
  private repository = new Map<string, IotDevicesRuleModel>();

  public create(data: Omit<IotDevicesRuleModel, "id" | "version" | "createdAt" | "updatedAt">): IotDevicesRuleModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotDevicesRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotDevicesRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotDevicesRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotDevicesRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotDevicesRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotDevicesRuleModel>): IotDevicesRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotDevicesRuleModel = {
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
