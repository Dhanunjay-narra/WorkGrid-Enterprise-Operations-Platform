import { IotFleetPayloadModel, IotFleetPayloadValidator } from "@nexora/types/domains/iot/fleet/IotFleetPayload";

export class IotFleetPayloadService {
  private repository = new Map<string, IotFleetPayloadModel>();

  public create(data: Omit<IotFleetPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): IotFleetPayloadModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFleetPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFleetPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFleetPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFleetPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFleetPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFleetPayloadModel>): IotFleetPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFleetPayloadModel = {
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
