import { IotTelemetryTransactionModel, IotTelemetryTransactionValidator } from "@nexora/types/domains/iot/telemetry/IotTelemetryTransaction";

export class IotTelemetryTransactionService {
  private repository = new Map<string, IotTelemetryTransactionModel>();

  public create(data: Omit<IotTelemetryTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): IotTelemetryTransactionModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotTelemetryTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotTelemetryTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotTelemetryTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotTelemetryTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotTelemetryTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotTelemetryTransactionModel>): IotTelemetryTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotTelemetryTransactionModel = {
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
