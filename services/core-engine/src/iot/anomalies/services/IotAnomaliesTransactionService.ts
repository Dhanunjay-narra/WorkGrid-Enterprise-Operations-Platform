import { IotAnomaliesTransactionModel, IotAnomaliesTransactionValidator } from "@nexora/types/domains/iot/anomalies/IotAnomaliesTransaction";

export class IotAnomaliesTransactionService {
  private repository = new Map<string, IotAnomaliesTransactionModel>();

  public create(data: Omit<IotAnomaliesTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): IotAnomaliesTransactionModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotAnomaliesTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotAnomaliesTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotAnomaliesTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotAnomaliesTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotAnomaliesTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotAnomaliesTransactionModel>): IotAnomaliesTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotAnomaliesTransactionModel = {
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
