import { AuditProfileModel, AuditProfileValidator } from "@nexora/types/domains/audit/AuditProfile";

export class AuditProfileService {
  private repository = new Map<string, AuditProfileModel>();

  public create(data: Omit<AuditProfileModel, "id" | "version" | "createdAt" | "updatedAt">): AuditProfileModel {
    const id = "audi_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuditProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuditProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuditProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuditProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuditProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuditProfileModel>): AuditProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuditProfileModel = {
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
