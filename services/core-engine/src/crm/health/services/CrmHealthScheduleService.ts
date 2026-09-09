import { CrmHealthScheduleModel, CrmHealthScheduleValidator } from "@nexora/types/domains/crm/health/CrmHealthSchedule";

export class CrmHealthScheduleService {
  private repository = new Map<string, CrmHealthScheduleModel>();

  public create(data: Omit<CrmHealthScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): CrmHealthScheduleModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmHealthScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmHealthScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmHealthSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmHealthScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmHealthScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmHealthScheduleModel>): CrmHealthScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmHealthScheduleModel = {
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
