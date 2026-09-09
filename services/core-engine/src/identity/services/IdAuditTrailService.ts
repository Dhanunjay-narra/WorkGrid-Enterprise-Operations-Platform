import { IdAuditTrailData, IdAuditTrailValidator } from "../../../../packages/types/src/domains/identity/IdAuditTrail";

export class IdAuditTrailService {
  private repository = new Map<string, IdAuditTrailData>();

  public create(data: Omit<IdAuditTrailData, "id" | "createdAt" | "updatedAt">): IdAuditTrailData {
    const id = "ide_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IdAuditTrailData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdAuditTrailValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdAuditTrail: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdAuditTrailData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IdAuditTrailData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IdAuditTrailData>): IdAuditTrailData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdAuditTrailData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
