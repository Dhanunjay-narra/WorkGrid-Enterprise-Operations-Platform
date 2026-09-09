import { SupportSlaScheduleModel, SupportSlaScheduleValidator } from "@nexora/types/domains/support/sla/SupportSlaSchedule";

export class SupportSlaScheduleService {
  private repository = new Map<string, SupportSlaScheduleModel>();

  public create(data: Omit<SupportSlaScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSlaScheduleModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSlaScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSlaScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSlaSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSlaScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSlaScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSlaScheduleModel>): SupportSlaScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSlaScheduleModel = {
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
