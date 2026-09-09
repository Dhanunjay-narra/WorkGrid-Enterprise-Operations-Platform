import { HrPayrollPayloadModel, HrPayrollPayloadValidator } from "@nexora/types/domains/hr/payroll/HrPayrollPayload";

export class HrPayrollPayloadService {
  private repository = new Map<string, HrPayrollPayloadModel>();

  public create(data: Omit<HrPayrollPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): HrPayrollPayloadModel {
    const id = "hr_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrPayrollPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrPayrollPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrPayrollPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrPayrollPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrPayrollPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrPayrollPayloadModel>): HrPayrollPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrPayrollPayloadModel = {
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
