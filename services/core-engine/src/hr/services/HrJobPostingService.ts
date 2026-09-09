import { HrJobPostingData, HrJobPostingValidator } from "../../../../packages/types/src/domains/hr/HrJobPosting";

export class HrJobPostingService {
  private repository = new Map<string, HrJobPostingData>();

  public create(data: Omit<HrJobPostingData, "id" | "createdAt" | "updatedAt">): HrJobPostingData {
    const id = "hr_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: HrJobPostingData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrJobPostingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrJobPosting: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrJobPostingData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): HrJobPostingData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<HrJobPostingData>): HrJobPostingData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrJobPostingData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
