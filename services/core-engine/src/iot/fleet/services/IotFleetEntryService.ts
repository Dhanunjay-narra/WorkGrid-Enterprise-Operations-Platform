import { IotFleetEntryModel, IotFleetEntryValidator } from "@nexora/types/domains/iot/fleet/IotFleetEntry";

export class IotFleetEntryService {
  private repository = new Map<string, IotFleetEntryModel>();

  public create(data: Omit<IotFleetEntryModel, "id" | "version" | "createdAt" | "updatedAt">): IotFleetEntryModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFleetEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFleetEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFleetEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFleetEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFleetEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFleetEntryModel>): IotFleetEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFleetEntryModel = {
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
