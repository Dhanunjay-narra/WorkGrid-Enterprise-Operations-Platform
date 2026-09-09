import { IotLocationsEventModel, IotLocationsEventValidator } from "@nexora/types/domains/iot/locations/IotLocationsEvent";

export class IotLocationsEventService {
  private repository = new Map<string, IotLocationsEventModel>();

  public create(data: Omit<IotLocationsEventModel, "id" | "version" | "createdAt" | "updatedAt">): IotLocationsEventModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotLocationsEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotLocationsEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotLocationsEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotLocationsEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotLocationsEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotLocationsEventModel>): IotLocationsEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotLocationsEventModel = {
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
