import { AuditConfigModel, AuditConfigValidator } from "@nexora/types/domains/audit/AuditConfig";

export class AuditConfigService {
  private repository = new Map<string, AuditConfigModel>();

  public create(data: Omit<AuditConfigModel, "id" | "version" | "createdAt" | "updatedAt">): AuditConfigModel {
    const id = "audi_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuditConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuditConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuditConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuditConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuditConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuditConfigModel>): AuditConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuditConfigModel = {
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
