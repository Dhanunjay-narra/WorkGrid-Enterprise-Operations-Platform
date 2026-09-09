import { IotDevicesAssignmentModel, IotDevicesAssignmentValidator } from "@nexora/types/domains/iot/devices/IotDevicesAssignment";

export class IotDevicesAssignmentService {
  private repository = new Map<string, IotDevicesAssignmentModel>();

  public create(data: Omit<IotDevicesAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): IotDevicesAssignmentModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotDevicesAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotDevicesAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotDevicesAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotDevicesAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotDevicesAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotDevicesAssignmentModel>): IotDevicesAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotDevicesAssignmentModel = {
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
