import { IotDevicesTransactionModel, IotDevicesTransactionValidator } from "@nexora/types/domains/iot/devices/IotDevicesTransaction";

export class IotDevicesTransactionService {
  private repository = new Map<string, IotDevicesTransactionModel>();

  public create(data: Omit<IotDevicesTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): IotDevicesTransactionModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotDevicesTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotDevicesTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotDevicesTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotDevicesTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotDevicesTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotDevicesTransactionModel>): IotDevicesTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotDevicesTransactionModel = {
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
