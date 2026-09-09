import { IotCommandsProfileModel, IotCommandsProfileValidator } from "@nexora/types/domains/iot/commands/IotCommandsProfile";

export class IotCommandsProfileService {
  private repository = new Map<string, IotCommandsProfileModel>();

  public create(data: Omit<IotCommandsProfileModel, "id" | "version" | "createdAt" | "updatedAt">): IotCommandsProfileModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotCommandsProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotCommandsProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotCommandsProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotCommandsProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotCommandsProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotCommandsProfileModel>): IotCommandsProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotCommandsProfileModel = {
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
