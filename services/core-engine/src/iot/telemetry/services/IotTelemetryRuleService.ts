import { IotTelemetryRuleModel, IotTelemetryRuleValidator } from "@nexora/types/domains/iot/telemetry/IotTelemetryRule";

export class IotTelemetryRuleService {
  private repository = new Map<string, IotTelemetryRuleModel>();

  public create(data: Omit<IotTelemetryRuleModel, "id" | "version" | "createdAt" | "updatedAt">): IotTelemetryRuleModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotTelemetryRuleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotTelemetryRuleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotTelemetryRule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotTelemetryRuleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotTelemetryRuleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotTelemetryRuleModel>): IotTelemetryRuleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotTelemetryRuleModel = {
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
