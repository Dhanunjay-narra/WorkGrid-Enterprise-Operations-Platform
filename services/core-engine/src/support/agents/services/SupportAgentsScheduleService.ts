import { SupportAgentsScheduleModel, SupportAgentsScheduleValidator } from "@nexora/types/domains/support/agents/SupportAgentsSchedule";

export class SupportAgentsScheduleService {
  private repository = new Map<string, SupportAgentsScheduleModel>();

  public create(data: Omit<SupportAgentsScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): SupportAgentsScheduleModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportAgentsScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportAgentsScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportAgentsSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportAgentsScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportAgentsScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportAgentsScheduleModel>): SupportAgentsScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportAgentsScheduleModel = {
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
