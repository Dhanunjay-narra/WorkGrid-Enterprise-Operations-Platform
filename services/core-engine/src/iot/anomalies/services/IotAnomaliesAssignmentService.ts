import { IotAnomaliesAssignmentModel, IotAnomaliesAssignmentValidator } from "@nexora/types/domains/iot/anomalies/IotAnomaliesAssignment";

export class IotAnomaliesAssignmentService {
  private repository = new Map<string, IotAnomaliesAssignmentModel>();

  public create(data: Omit<IotAnomaliesAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): IotAnomaliesAssignmentModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotAnomaliesAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotAnomaliesAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotAnomaliesAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotAnomaliesAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotAnomaliesAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotAnomaliesAssignmentModel>): IotAnomaliesAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotAnomaliesAssignmentModel = {
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
