import { IotFleetTransactionModel, IotFleetTransactionValidator } from "@nexora/types/domains/iot/fleet/IotFleetTransaction";

export class IotFleetTransactionService {
  private repository = new Map<string, IotFleetTransactionModel>();

  public create(data: Omit<IotFleetTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): IotFleetTransactionModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFleetTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFleetTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFleetTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFleetTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFleetTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFleetTransactionModel>): IotFleetTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFleetTransactionModel = {
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
