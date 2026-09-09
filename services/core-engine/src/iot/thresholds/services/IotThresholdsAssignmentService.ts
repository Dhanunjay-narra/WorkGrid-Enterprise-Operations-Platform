import { IotThresholdsAssignmentModel, IotThresholdsAssignmentValidator } from "@nexora/types/domains/iot/thresholds/IotThresholdsAssignment";

export class IotThresholdsAssignmentService {
  private repository = new Map<string, IotThresholdsAssignmentModel>();

  public create(data: Omit<IotThresholdsAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): IotThresholdsAssignmentModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotThresholdsAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotThresholdsAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotThresholdsAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotThresholdsAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotThresholdsAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotThresholdsAssignmentModel>): IotThresholdsAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotThresholdsAssignmentModel = {
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
