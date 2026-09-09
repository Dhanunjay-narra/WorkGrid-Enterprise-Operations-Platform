import { IotLocationsPayloadModel, IotLocationsPayloadValidator } from "@nexora/types/domains/iot/locations/IotLocationsPayload";

export class IotLocationsPayloadService {
  private repository = new Map<string, IotLocationsPayloadModel>();

  public create(data: Omit<IotLocationsPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): IotLocationsPayloadModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotLocationsPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotLocationsPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotLocationsPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotLocationsPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotLocationsPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotLocationsPayloadModel>): IotLocationsPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotLocationsPayloadModel = {
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
