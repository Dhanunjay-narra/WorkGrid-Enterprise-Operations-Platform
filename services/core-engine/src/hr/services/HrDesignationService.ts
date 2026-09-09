import { HrDesignationData, HrDesignationValidator } from "../../../../packages/types/src/domains/hr/HrDesignation";

export class HrDesignationService {
  private repository = new Map<string, HrDesignationData>();

  public create(data: Omit<HrDesignationData, "id" | "createdAt" | "updatedAt">): HrDesignationData {
    const id = "hr_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: HrDesignationData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrDesignationValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrDesignation: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrDesignationData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): HrDesignationData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<HrDesignationData>): HrDesignationData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrDesignationData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
