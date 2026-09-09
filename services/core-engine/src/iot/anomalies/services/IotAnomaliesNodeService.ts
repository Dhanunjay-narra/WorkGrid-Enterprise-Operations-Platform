import { IotAnomaliesNodeModel, IotAnomaliesNodeValidator } from "@nexora/types/domains/iot/anomalies/IotAnomaliesNode";

export class IotAnomaliesNodeService {
  private repository = new Map<string, IotAnomaliesNodeModel>();

  public create(data: Omit<IotAnomaliesNodeModel, "id" | "version" | "createdAt" | "updatedAt">): IotAnomaliesNodeModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotAnomaliesNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotAnomaliesNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotAnomaliesNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotAnomaliesNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotAnomaliesNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotAnomaliesNodeModel>): IotAnomaliesNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotAnomaliesNodeModel = {
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
