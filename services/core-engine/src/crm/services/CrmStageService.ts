import { CrmStageData, CrmStageValidator } from "../../../../packages/types/src/domains/crm/CrmStage";

export class CrmStageService {
  private repository = new Map<string, CrmStageData>();

  public create(data: Omit<CrmStageData, "id" | "createdAt" | "updatedAt">): CrmStageData {
    const id = "crm_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CrmStageData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmStageValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmStage: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmStageData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CrmStageData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CrmStageData>): CrmStageData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmStageData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
