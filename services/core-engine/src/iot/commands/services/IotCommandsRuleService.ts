import { IotCommandsRuleModel, IotCommandsRuleValidator } from "@nexora/types/domains/iot/commands/IotCommandsRule";

export class IotCommandsRuleService {
  private repository = new Map<string, IotCommandsRuleModel>();

  public create(data: Omit<IotCommandsRuleModel, "id" | "version" | "createdAt" | "updatedAt">): IotCommandsRuleModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotCommandsRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotCommandsRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotCommandsRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotCommandsRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotCommandsRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotCommandsRuleModel>): IotCommandsRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotCommandsRuleModel = {
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
