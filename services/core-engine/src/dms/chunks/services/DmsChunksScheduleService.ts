import { DmsChunksScheduleModel, DmsChunksScheduleValidator } from "@nexora/types/domains/dms/chunks/DmsChunksSchedule";

export class DmsChunksScheduleService {
  private repository = new Map<string, DmsChunksScheduleModel>();

  public create(data: Omit<DmsChunksScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): DmsChunksScheduleModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsChunksScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsChunksScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsChunksSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsChunksScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsChunksScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsChunksScheduleModel>): DmsChunksScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsChunksScheduleModel = {
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
