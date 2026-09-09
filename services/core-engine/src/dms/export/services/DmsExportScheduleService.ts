import { DmsExportScheduleModel, DmsExportScheduleValidator } from "@nexora/types/domains/dms/export/DmsExportSchedule";

export class DmsExportScheduleService {
  private repository = new Map<string, DmsExportScheduleModel>();

  public create(data: Omit<DmsExportScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): DmsExportScheduleModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsExportScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsExportScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsExportSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsExportScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsExportScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsExportScheduleModel>): DmsExportScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsExportScheduleModel = {
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
