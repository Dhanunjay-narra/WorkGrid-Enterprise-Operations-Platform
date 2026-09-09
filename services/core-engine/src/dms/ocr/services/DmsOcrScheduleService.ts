import { DmsOcrScheduleModel, DmsOcrScheduleValidator } from "@nexora/types/domains/dms/ocr/DmsOcrSchedule";

export class DmsOcrScheduleService {
  private repository = new Map<string, DmsOcrScheduleModel>();

  public create(data: Omit<DmsOcrScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): DmsOcrScheduleModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsOcrScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsOcrScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsOcrSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsOcrScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsOcrScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsOcrScheduleModel>): DmsOcrScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsOcrScheduleModel = {
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
