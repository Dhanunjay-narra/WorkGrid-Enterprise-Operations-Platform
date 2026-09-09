import { IotThresholdsRuleModel, IotThresholdsRuleValidator } from "@nexora/types/domains/iot/thresholds/IotThresholdsRule";

export class IotThresholdsRuleService {
  private repository = new Map<string, IotThresholdsRuleModel>();

  public create(data: Omit<IotThresholdsRuleModel, "id" | "version" | "createdAt" | "updatedAt">): IotThresholdsRuleModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotThresholdsRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotThresholdsRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotThresholdsRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotThresholdsRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotThresholdsRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotThresholdsRuleModel>): IotThresholdsRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotThresholdsRuleModel = {
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
