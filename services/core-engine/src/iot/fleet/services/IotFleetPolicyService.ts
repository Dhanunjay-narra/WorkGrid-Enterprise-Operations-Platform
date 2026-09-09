import { IotFleetPolicyModel, IotFleetPolicyValidator } from "@nexora/types/domains/iot/fleet/IotFleetPolicy";

export class IotFleetPolicyService {
  private repository = new Map<string, IotFleetPolicyModel>();

  public create(data: Omit<IotFleetPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): IotFleetPolicyModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFleetPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFleetPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFleetPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFleetPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFleetPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFleetPolicyModel>): IotFleetPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFleetPolicyModel = {
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
