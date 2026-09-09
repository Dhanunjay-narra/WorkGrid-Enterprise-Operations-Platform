import { IotLocationsQueueModel, IotLocationsQueueValidator } from "@nexora/types/domains/iot/locations/IotLocationsQueue";

export class IotLocationsQueueService {
  private repository = new Map<string, IotLocationsQueueModel>();

  public create(data: Omit<IotLocationsQueueModel, "id" | "version" | "createdAt" | "updatedAt">): IotLocationsQueueModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotLocationsQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotLocationsQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotLocationsQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotLocationsQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotLocationsQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotLocationsQueueModel>): IotLocationsQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotLocationsQueueModel = {
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
