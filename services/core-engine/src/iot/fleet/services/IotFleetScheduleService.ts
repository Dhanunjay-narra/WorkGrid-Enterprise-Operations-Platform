import { IotFleetScheduleModel, IotFleetScheduleValidator } from "@nexora/types/domains/iot/fleet/IotFleetSchedule";

export class IotFleetScheduleService {
  private repository = new Map<string, IotFleetScheduleModel>();

  public create(data: Omit<IotFleetScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): IotFleetScheduleModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFleetScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFleetScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFleetSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFleetScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFleetScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFleetScheduleModel>): IotFleetScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFleetScheduleModel = {
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
