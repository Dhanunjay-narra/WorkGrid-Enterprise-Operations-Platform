import { IotCommandsScheduleModel, IotCommandsScheduleValidator } from "@nexora/types/domains/iot/commands/IotCommandsSchedule";

export class IotCommandsScheduleService {
  private repository = new Map<string, IotCommandsScheduleModel>();

  public create(data: Omit<IotCommandsScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): IotCommandsScheduleModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotCommandsScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotCommandsScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotCommandsSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotCommandsScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotCommandsScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotCommandsScheduleModel>): IotCommandsScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotCommandsScheduleModel = {
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
