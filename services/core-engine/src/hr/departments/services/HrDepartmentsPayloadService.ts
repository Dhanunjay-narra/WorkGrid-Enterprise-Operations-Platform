import { HrDepartmentsPayloadModel, HrDepartmentsPayloadValidator } from "@nexora/types/domains/hr/departments/HrDepartmentsPayload";

export class HrDepartmentsPayloadService {
  private repository = new Map<string, HrDepartmentsPayloadModel>();

  public create(data: Omit<HrDepartmentsPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): HrDepartmentsPayloadModel {
    const id = "hr_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: HrDepartmentsPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = HrDepartmentsPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for HrDepartmentsPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): HrDepartmentsPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: HrDepartmentsPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<HrDepartmentsPayloadModel>): HrDepartmentsPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: HrDepartmentsPayloadModel = {
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
