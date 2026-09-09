import { IotFleetProfileModel, IotFleetProfileValidator } from "@nexora/types/domains/iot/fleet/IotFleetProfile";

export class IotFleetProfileService {
  private repository = new Map<string, IotFleetProfileModel>();

  public create(data: Omit<IotFleetProfileModel, "id" | "version" | "createdAt" | "updatedAt">): IotFleetProfileModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFleetProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFleetProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFleetProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFleetProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFleetProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFleetProfileModel>): IotFleetProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFleetProfileModel = {
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
