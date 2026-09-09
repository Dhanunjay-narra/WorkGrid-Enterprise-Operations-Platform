import { CrmLeadsScheduleModel, CrmLeadsScheduleValidator } from "@nexora/types/domains/crm/leads/CrmLeadsSchedule";

export class CrmLeadsScheduleService {
  private repository = new Map<string, CrmLeadsScheduleModel>();

  public create(data: Omit<CrmLeadsScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): CrmLeadsScheduleModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmLeadsScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmLeadsScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmLeadsSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmLeadsScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmLeadsScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmLeadsScheduleModel>): CrmLeadsScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmLeadsScheduleModel = {
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
