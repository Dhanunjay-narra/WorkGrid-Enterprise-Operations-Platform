import { IotFirmwareAssignmentModel, IotFirmwareAssignmentValidator } from "@nexora/types/domains/iot/firmware/IotFirmwareAssignment";

export class IotFirmwareAssignmentService {
  private repository = new Map<string, IotFirmwareAssignmentModel>();

  public create(data: Omit<IotFirmwareAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): IotFirmwareAssignmentModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFirmwareAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFirmwareAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFirmwareAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFirmwareAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFirmwareAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFirmwareAssignmentModel>): IotFirmwareAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFirmwareAssignmentModel = {
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
