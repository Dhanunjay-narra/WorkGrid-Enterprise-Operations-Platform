import { DmsFoldersScheduleModel, DmsFoldersScheduleValidator } from "@nexora/types/domains/dms/folders/DmsFoldersSchedule";

export class DmsFoldersScheduleService {
  private repository = new Map<string, DmsFoldersScheduleModel>();

  public create(data: Omit<DmsFoldersScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFoldersScheduleModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFoldersScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFoldersScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFoldersSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFoldersScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFoldersScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFoldersScheduleModel>): DmsFoldersScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFoldersScheduleModel = {
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
