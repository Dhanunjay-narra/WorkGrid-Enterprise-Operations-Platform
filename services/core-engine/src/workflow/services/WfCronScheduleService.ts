import { WfCronScheduleData, WfCronScheduleValidator } from "../../../../packages/types/src/domains/workflow/WfCronSchedule";

export class WfCronScheduleService {
  private repository = new Map<string, WfCronScheduleData>();

  public create(data: Omit<WfCronScheduleData, "id" | "createdAt" | "updatedAt">): WfCronScheduleData {
    const id = "wor_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: WfCronScheduleData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = WfCronScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for WfCronSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): WfCronScheduleData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): WfCronScheduleData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<WfCronScheduleData>): WfCronScheduleData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: WfCronScheduleData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
