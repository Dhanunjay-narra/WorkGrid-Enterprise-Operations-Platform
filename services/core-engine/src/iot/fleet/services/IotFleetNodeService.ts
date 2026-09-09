import { IotFleetNodeModel, IotFleetNodeValidator } from "@nexora/types/domains/iot/fleet/IotFleetNode";

export class IotFleetNodeService {
  private repository = new Map<string, IotFleetNodeModel>();

  public create(data: Omit<IotFleetNodeModel, "id" | "version" | "createdAt" | "updatedAt">): IotFleetNodeModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFleetNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFleetNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFleetNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFleetNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFleetNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFleetNodeModel>): IotFleetNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFleetNodeModel = {
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
