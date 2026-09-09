import { IotLocationsScheduleModel, IotLocationsScheduleValidator } from "@nexora/types/domains/iot/locations/IotLocationsSchedule";

export class IotLocationsScheduleService {
  private repository = new Map<string, IotLocationsScheduleModel>();

  public create(data: Omit<IotLocationsScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): IotLocationsScheduleModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotLocationsScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotLocationsScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotLocationsSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotLocationsScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotLocationsScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotLocationsScheduleModel>): IotLocationsScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotLocationsScheduleModel = {
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
