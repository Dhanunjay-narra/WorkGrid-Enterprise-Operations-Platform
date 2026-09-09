import { IotFirmwarePolicyModel, IotFirmwarePolicyValidator } from "@nexora/types/domains/iot/firmware/IotFirmwarePolicy";

export class IotFirmwarePolicyService {
  private repository = new Map<string, IotFirmwarePolicyModel>();

  public create(data: Omit<IotFirmwarePolicyModel, "id" | "version" | "createdAt" | "updatedAt">): IotFirmwarePolicyModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFirmwarePolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFirmwarePolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFirmwarePolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFirmwarePolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFirmwarePolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFirmwarePolicyModel>): IotFirmwarePolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFirmwarePolicyModel = {
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
