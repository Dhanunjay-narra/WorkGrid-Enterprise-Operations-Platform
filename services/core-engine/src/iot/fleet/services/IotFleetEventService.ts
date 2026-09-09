import { IotFleetEventModel, IotFleetEventValidator } from "@nexora/types/domains/iot/fleet/IotFleetEvent";

export class IotFleetEventService {
  private repository = new Map<string, IotFleetEventModel>();

  public create(data: Omit<IotFleetEventModel, "id" | "version" | "createdAt" | "updatedAt">): IotFleetEventModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFleetEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFleetEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFleetEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFleetEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFleetEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFleetEventModel>): IotFleetEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFleetEventModel = {
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
