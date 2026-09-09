import { HrCandidateData, HrCandidateValidator } from "../../../../packages/types/src/domains/hr/HrCandidate";

export class HrCandidateService {
  private repository = new Map<string, HrCandidateData>();

  public create(data: Omit<HrCandidateData, "id" | "createdAt" | "updatedAt">): HrCandidateData {
    const id = "hr_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: HrCandidateData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrCandidateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrCandidate: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrCandidateData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): HrCandidateData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<HrCandidateData>): HrCandidateData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrCandidateData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
