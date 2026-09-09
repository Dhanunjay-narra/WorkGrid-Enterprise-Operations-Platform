import { HrInterviewStageData, HrInterviewStageValidator } from "../../../../packages/types/src/domains/hr/HrInterviewStage";

export class HrInterviewStageService {
  private repository = new Map<string, HrInterviewStageData>();

  public create(data: Omit<HrInterviewStageData, "id" | "createdAt" | "updatedAt">): HrInterviewStageData {
    const id = "hr_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: HrInterviewStageData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrInterviewStageValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrInterviewStage: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrInterviewStageData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): HrInterviewStageData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<HrInterviewStageData>): HrInterviewStageData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrInterviewStageData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
