import { CrmTerritoryScheduleModel, CrmTerritoryScheduleValidator } from "@nexora/types/domains/crm/territory/CrmTerritorySchedule";

export class CrmTerritoryScheduleService {
  private repository = new Map<string, CrmTerritoryScheduleModel>();

  public create(data: Omit<CrmTerritoryScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): CrmTerritoryScheduleModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmTerritoryScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmTerritoryScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmTerritorySchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmTerritoryScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmTerritoryScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmTerritoryScheduleModel>): CrmTerritoryScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmTerritoryScheduleModel = {
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
