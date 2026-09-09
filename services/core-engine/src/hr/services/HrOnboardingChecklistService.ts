import { HrOnboardingChecklistData, HrOnboardingChecklistValidator } from "../../../../packages/types/src/domains/hr/HrOnboardingChecklist";

export class HrOnboardingChecklistService {
  private repository = new Map<string, HrOnboardingChecklistData>();

  public create(data: Omit<HrOnboardingChecklistData, "id" | "createdAt" | "updatedAt">): HrOnboardingChecklistData {
    const id = "hr_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: HrOnboardingChecklistData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrOnboardingChecklistValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrOnboardingChecklist: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrOnboardingChecklistData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): HrOnboardingChecklistData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<HrOnboardingChecklistData>): HrOnboardingChecklistData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrOnboardingChecklistData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
