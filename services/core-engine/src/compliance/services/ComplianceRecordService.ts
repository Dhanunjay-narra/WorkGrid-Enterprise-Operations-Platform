import { ComplianceRecordModel, ComplianceRecordValidator } from "@nexora/types/domains/compliance/ComplianceRecord";

export class ComplianceRecordService {
  private repository = new Map<string, ComplianceRecordModel>();

  public create(data: Omit<ComplianceRecordModel, "id" | "version" | "createdAt" | "updatedAt">): ComplianceRecordModel {
    const id = "comp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ComplianceRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ComplianceRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ComplianceRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ComplianceRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ComplianceRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ComplianceRecordModel>): ComplianceRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ComplianceRecordModel = {
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
