import { IotThresholdsTransactionModel, IotThresholdsTransactionValidator } from "@nexora/types/domains/iot/thresholds/IotThresholdsTransaction";

export class IotThresholdsTransactionService {
  private repository = new Map<string, IotThresholdsTransactionModel>();

  public create(data: Omit<IotThresholdsTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): IotThresholdsTransactionModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotThresholdsTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotThresholdsTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotThresholdsTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotThresholdsTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotThresholdsTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotThresholdsTransactionModel>): IotThresholdsTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotThresholdsTransactionModel = {
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
