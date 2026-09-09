import { ComplianceScheduleModel, ComplianceScheduleValidator } from "@nexora/types/domains/compliance/ComplianceSchedule";

export class ComplianceScheduleService {
  private repository = new Map<string, ComplianceScheduleModel>();

  public create(data: Omit<ComplianceScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): ComplianceScheduleModel {
    const id = "comp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ComplianceScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ComplianceScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ComplianceSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ComplianceScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ComplianceScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ComplianceScheduleModel>): ComplianceScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ComplianceScheduleModel = {
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
