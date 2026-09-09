import { BiReportScheduleData, BiReportScheduleValidator } from "../../../../packages/types/src/domains/analytics/BiReportSchedule";

export class BiReportScheduleService {
  private repository = new Map<string, BiReportScheduleData>();

  public create(data: Omit<BiReportScheduleData, "id" | "createdAt" | "updatedAt">): BiReportScheduleData {
    const id = "ana_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: BiReportScheduleData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiReportScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiReportSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiReportScheduleData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): BiReportScheduleData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<BiReportScheduleData>): BiReportScheduleData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiReportScheduleData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
