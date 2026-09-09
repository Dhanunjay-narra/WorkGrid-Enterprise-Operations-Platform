import { IotLocationsAssignmentModel, IotLocationsAssignmentValidator } from "@nexora/types/domains/iot/locations/IotLocationsAssignment";

export class IotLocationsAssignmentService {
  private repository = new Map<string, IotLocationsAssignmentModel>();

  public create(data: Omit<IotLocationsAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): IotLocationsAssignmentModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotLocationsAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotLocationsAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotLocationsAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotLocationsAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotLocationsAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotLocationsAssignmentModel>): IotLocationsAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotLocationsAssignmentModel = {
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
