import { IotFleetAssignmentModel, IotFleetAssignmentValidator } from "@nexora/types/domains/iot/fleet/IotFleetAssignment";

export class IotFleetAssignmentService {
  private repository = new Map<string, IotFleetAssignmentModel>();

  public create(data: Omit<IotFleetAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): IotFleetAssignmentModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFleetAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFleetAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFleetAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFleetAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFleetAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFleetAssignmentModel>): IotFleetAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFleetAssignmentModel = {
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
