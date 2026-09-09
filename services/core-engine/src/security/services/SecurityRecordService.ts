import { SecurityRecordModel, SecurityRecordValidator } from "@nexora/types/domains/security/SecurityRecord";

export class SecurityRecordService {
  private repository = new Map<string, SecurityRecordModel>();

  public create(data: Omit<SecurityRecordModel, "id" | "version" | "createdAt" | "updatedAt">): SecurityRecordModel {
    const id = "secu_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SecurityRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SecurityRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SecurityRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SecurityRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SecurityRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SecurityRecordModel>): SecurityRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SecurityRecordModel = {
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
