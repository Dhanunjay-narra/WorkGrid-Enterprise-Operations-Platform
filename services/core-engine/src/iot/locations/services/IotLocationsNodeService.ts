import { IotLocationsNodeModel, IotLocationsNodeValidator } from "@nexora/types/domains/iot/locations/IotLocationsNode";

export class IotLocationsNodeService {
  private repository = new Map<string, IotLocationsNodeModel>();

  public create(data: Omit<IotLocationsNodeModel, "id" | "version" | "createdAt" | "updatedAt">): IotLocationsNodeModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotLocationsNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotLocationsNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotLocationsNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotLocationsNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotLocationsNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotLocationsNodeModel>): IotLocationsNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotLocationsNodeModel = {
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
