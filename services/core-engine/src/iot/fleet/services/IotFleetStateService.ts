import { IotFleetStateModel, IotFleetStateValidator } from "@nexora/types/domains/iot/fleet/IotFleetState";

export class IotFleetStateService {
  private repository = new Map<string, IotFleetStateModel>();

  public create(data: Omit<IotFleetStateModel, "id" | "version" | "createdAt" | "updatedAt">): IotFleetStateModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFleetStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFleetStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFleetState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFleetStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFleetStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFleetStateModel>): IotFleetStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFleetStateModel = {
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
