import { IotCommandsStateModel, IotCommandsStateValidator } from "@nexora/types/domains/iot/commands/IotCommandsState";

export class IotCommandsStateService {
  private repository = new Map<string, IotCommandsStateModel>();

  public create(data: Omit<IotCommandsStateModel, "id" | "version" | "createdAt" | "updatedAt">): IotCommandsStateModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotCommandsStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotCommandsStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotCommandsState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotCommandsStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotCommandsStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotCommandsStateModel>): IotCommandsStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotCommandsStateModel = {
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
