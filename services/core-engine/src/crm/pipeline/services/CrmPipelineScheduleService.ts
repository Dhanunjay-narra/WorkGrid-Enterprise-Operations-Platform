import { CrmPipelineScheduleModel, CrmPipelineScheduleValidator } from "@nexora/types/domains/crm/pipeline/CrmPipelineSchedule";

export class CrmPipelineScheduleService {
  private repository = new Map<string, CrmPipelineScheduleModel>();

  public create(data: Omit<CrmPipelineScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): CrmPipelineScheduleModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmPipelineScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmPipelineScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmPipelineSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmPipelineScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmPipelineScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmPipelineScheduleModel>): CrmPipelineScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmPipelineScheduleModel = {
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
