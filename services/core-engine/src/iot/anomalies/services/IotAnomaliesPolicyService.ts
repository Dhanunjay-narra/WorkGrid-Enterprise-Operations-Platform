import { IotAnomaliesPolicyModel, IotAnomaliesPolicyValidator } from "@nexora/types/domains/iot/anomalies/IotAnomaliesPolicy";

export class IotAnomaliesPolicyService {
  private repository = new Map<string, IotAnomaliesPolicyModel>();

  public create(data: Omit<IotAnomaliesPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): IotAnomaliesPolicyModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotAnomaliesPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotAnomaliesPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotAnomaliesPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotAnomaliesPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotAnomaliesPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotAnomaliesPolicyModel>): IotAnomaliesPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotAnomaliesPolicyModel = {
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
