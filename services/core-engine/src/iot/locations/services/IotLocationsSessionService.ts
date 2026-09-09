import { IotLocationsSessionModel, IotLocationsSessionValidator } from "@nexora/types/domains/iot/locations/IotLocationsSession";

export class IotLocationsSessionService {
  private repository = new Map<string, IotLocationsSessionModel>();

  public create(data: Omit<IotLocationsSessionModel, "id" | "version" | "createdAt" | "updatedAt">): IotLocationsSessionModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotLocationsSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotLocationsSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotLocationsSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotLocationsSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotLocationsSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotLocationsSessionModel>): IotLocationsSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotLocationsSessionModel = {
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
