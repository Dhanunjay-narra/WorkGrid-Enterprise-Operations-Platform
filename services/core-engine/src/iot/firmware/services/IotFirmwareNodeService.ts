import { IotFirmwareNodeModel, IotFirmwareNodeValidator } from "@nexora/types/domains/iot/firmware/IotFirmwareNode";

export class IotFirmwareNodeService {
  private repository = new Map<string, IotFirmwareNodeModel>();

  public create(data: Omit<IotFirmwareNodeModel, "id" | "version" | "createdAt" | "updatedAt">): IotFirmwareNodeModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFirmwareNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFirmwareNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFirmwareNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFirmwareNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFirmwareNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFirmwareNodeModel>): IotFirmwareNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFirmwareNodeModel = {
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
