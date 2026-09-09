import { IotTelemetryAssignmentModel, IotTelemetryAssignmentValidator } from "@nexora/types/domains/iot/telemetry/IotTelemetryAssignment";

export class IotTelemetryAssignmentService {
  private repository = new Map<string, IotTelemetryAssignmentModel>();

  public create(data: Omit<IotTelemetryAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): IotTelemetryAssignmentModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotTelemetryAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotTelemetryAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotTelemetryAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotTelemetryAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotTelemetryAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotTelemetryAssignmentModel>): IotTelemetryAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotTelemetryAssignmentModel = {
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
