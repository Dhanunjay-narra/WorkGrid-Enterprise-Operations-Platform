import { CrmAccountsScheduleModel, CrmAccountsScheduleValidator } from "@nexora/types/domains/crm/accounts/CrmAccountsSchedule";

export class CrmAccountsScheduleService {
  private repository = new Map<string, CrmAccountsScheduleModel>();

  public create(data: Omit<CrmAccountsScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): CrmAccountsScheduleModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmAccountsScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmAccountsScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmAccountsSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmAccountsScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmAccountsScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmAccountsScheduleModel>): CrmAccountsScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmAccountsScheduleModel = {
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
