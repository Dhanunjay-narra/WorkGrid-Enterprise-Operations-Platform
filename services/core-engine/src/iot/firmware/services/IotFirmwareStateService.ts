import { IotFirmwareStateModel, IotFirmwareStateValidator } from "@nexora/types/domains/iot/firmware/IotFirmwareState";

export class IotFirmwareStateService {
  private repository = new Map<string, IotFirmwareStateModel>();

  public create(data: Omit<IotFirmwareStateModel, "id" | "version" | "createdAt" | "updatedAt">): IotFirmwareStateModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFirmwareStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFirmwareStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFirmwareState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFirmwareStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFirmwareStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFirmwareStateModel>): IotFirmwareStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFirmwareStateModel = {
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
