import { IotFleetSessionModel, IotFleetSessionValidator } from "@nexora/types/domains/iot/fleet/IotFleetSession";

export class IotFleetSessionService {
  private repository = new Map<string, IotFleetSessionModel>();

  public create(data: Omit<IotFleetSessionModel, "id" | "version" | "createdAt" | "updatedAt">): IotFleetSessionModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFleetSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFleetSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFleetSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFleetSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFleetSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFleetSessionModel>): IotFleetSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFleetSessionModel = {
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
