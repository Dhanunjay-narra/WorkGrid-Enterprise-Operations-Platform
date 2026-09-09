import { AuditThresholdModel, AuditThresholdValidator } from "@nexora/types/domains/audit/AuditThreshold";

export class AuditThresholdService {
  private repository = new Map<string, AuditThresholdModel>();

  public create(data: Omit<AuditThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): AuditThresholdModel {
    const id = "audi_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuditThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuditThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuditThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuditThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuditThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuditThresholdModel>): AuditThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuditThresholdModel = {
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
