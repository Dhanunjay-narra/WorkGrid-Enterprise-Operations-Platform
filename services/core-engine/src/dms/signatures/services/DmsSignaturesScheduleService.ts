import { DmsSignaturesScheduleModel, DmsSignaturesScheduleValidator } from "@nexora/types/domains/dms/signatures/DmsSignaturesSchedule";

export class DmsSignaturesScheduleService {
  private repository = new Map<string, DmsSignaturesScheduleModel>();

  public create(data: Omit<DmsSignaturesScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): DmsSignaturesScheduleModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsSignaturesScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsSignaturesScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsSignaturesSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsSignaturesScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsSignaturesScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsSignaturesScheduleModel>): DmsSignaturesScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsSignaturesScheduleModel = {
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
