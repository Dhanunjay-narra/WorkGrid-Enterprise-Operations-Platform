import { SecurityScheduleModel, SecurityScheduleValidator } from "@nexora/types/domains/security/SecuritySchedule";

export class SecurityScheduleService {
  private repository = new Map<string, SecurityScheduleModel>();

  public create(data: Omit<SecurityScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): SecurityScheduleModel {
    const id = "secu_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SecurityScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SecurityScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SecuritySchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SecurityScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SecurityScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SecurityScheduleModel>): SecurityScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SecurityScheduleModel = {
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
