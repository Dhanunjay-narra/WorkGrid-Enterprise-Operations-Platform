import { IotCommandsReportModel, IotCommandsReportValidator } from "@nexora/types/domains/iot/commands/IotCommandsReport";

export class IotCommandsReportService {
  private repository = new Map<string, IotCommandsReportModel>();

  public create(data: Omit<IotCommandsReportModel, "id" | "version" | "createdAt" | "updatedAt">): IotCommandsReportModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotCommandsReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotCommandsReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotCommandsReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotCommandsReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotCommandsReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotCommandsReportModel>): IotCommandsReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotCommandsReportModel = {
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
