import { HrPayrollNodeModel, HrPayrollNodeValidator } from "@nexora/types/domains/hr/payroll/HrPayrollNode";

export class HrPayrollNodeService {
  private repository = new Map<string, HrPayrollNodeModel>();

  public create(data: Omit<HrPayrollNodeModel, "id" | "version" | "createdAt" | "updatedAt">): HrPayrollNodeModel {
    const id = "hr_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrPayrollNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrPayrollNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrPayrollNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrPayrollNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrPayrollNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrPayrollNodeModel>): HrPayrollNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrPayrollNodeModel = {
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
