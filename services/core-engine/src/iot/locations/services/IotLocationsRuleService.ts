import { IotLocationsRuleModel, IotLocationsRuleValidator } from "@nexora/types/domains/iot/locations/IotLocationsRule";

export class IotLocationsRuleService {
  private repository = new Map<string, IotLocationsRuleModel>();

  public create(data: Omit<IotLocationsRuleModel, "id" | "version" | "createdAt" | "updatedAt">): IotLocationsRuleModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotLocationsRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotLocationsRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotLocationsRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotLocationsRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotLocationsRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotLocationsRuleModel>): IotLocationsRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotLocationsRuleModel = {
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
