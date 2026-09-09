import { IotLocationsProfileModel, IotLocationsProfileValidator } from "@nexora/types/domains/iot/locations/IotLocationsProfile";

export class IotLocationsProfileService {
  private repository = new Map<string, IotLocationsProfileModel>();

  public create(data: Omit<IotLocationsProfileModel, "id" | "version" | "createdAt" | "updatedAt">): IotLocationsProfileModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotLocationsProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotLocationsProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotLocationsProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotLocationsProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotLocationsProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotLocationsProfileModel>): IotLocationsProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotLocationsProfileModel = {
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
