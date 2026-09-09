import { IotLocationsPolicyModel, IotLocationsPolicyValidator } from "@nexora/types/domains/iot/locations/IotLocationsPolicy";

export class IotLocationsPolicyService {
  private repository = new Map<string, IotLocationsPolicyModel>();

  public create(data: Omit<IotLocationsPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): IotLocationsPolicyModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotLocationsPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotLocationsPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotLocationsPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotLocationsPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotLocationsPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotLocationsPolicyModel>): IotLocationsPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotLocationsPolicyModel = {
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
