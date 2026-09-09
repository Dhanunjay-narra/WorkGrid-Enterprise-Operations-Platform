import { DmsFilesScheduleModel, DmsFilesScheduleValidator } from "@nexora/types/domains/dms/files/DmsFilesSchedule";

export class DmsFilesScheduleService {
  private repository = new Map<string, DmsFilesScheduleModel>();

  public create(data: Omit<DmsFilesScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFilesScheduleModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFilesScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFilesScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFilesSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFilesScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFilesScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFilesScheduleModel>): DmsFilesScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFilesScheduleModel = {
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
