import { AuditRecordModel, AuditRecordValidator } from "@nexora/types/domains/audit/AuditRecord";

export class AuditRecordService {
  private repository = new Map<string, AuditRecordModel>();

  public create(data: Omit<AuditRecordModel, "id" | "version" | "createdAt" | "updatedAt">): AuditRecordModel {
    const id = "audi_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuditRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuditRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuditRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuditRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuditRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuditRecordModel>): AuditRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuditRecordModel = {
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
