import { IotCommandsSessionModel, IotCommandsSessionValidator } from "@nexora/types/domains/iot/commands/IotCommandsSession";

export class IotCommandsSessionService {
  private repository = new Map<string, IotCommandsSessionModel>();

  public create(data: Omit<IotCommandsSessionModel, "id" | "version" | "createdAt" | "updatedAt">): IotCommandsSessionModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotCommandsSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotCommandsSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotCommandsSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotCommandsSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotCommandsSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotCommandsSessionModel>): IotCommandsSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotCommandsSessionModel = {
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
