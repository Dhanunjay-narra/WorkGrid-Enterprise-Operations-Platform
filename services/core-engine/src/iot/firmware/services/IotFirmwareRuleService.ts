import { IotFirmwareRuleModel, IotFirmwareRuleValidator } from "@nexora/types/domains/iot/firmware/IotFirmwareRule";

export class IotFirmwareRuleService {
  private repository = new Map<string, IotFirmwareRuleModel>();

  public create(data: Omit<IotFirmwareRuleModel, "id" | "version" | "createdAt" | "updatedAt">): IotFirmwareRuleModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFirmwareRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFirmwareRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFirmwareRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFirmwareRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFirmwareRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFirmwareRuleModel>): IotFirmwareRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFirmwareRuleModel = {
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
