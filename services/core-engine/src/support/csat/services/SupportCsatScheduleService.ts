import { SupportCsatScheduleModel, SupportCsatScheduleValidator } from "@nexora/types/domains/support/csat/SupportCsatSchedule";

export class SupportCsatScheduleService {
  private repository = new Map<string, SupportCsatScheduleModel>();

  public create(data: Omit<SupportCsatScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): SupportCsatScheduleModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportCsatScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportCsatScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportCsatSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportCsatScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportCsatScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportCsatScheduleModel>): SupportCsatScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportCsatScheduleModel = {
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
