import { DmsExportPolicyModel, DmsExportPolicyValidator } from "@nexora/types/domains/dms/export/DmsExportPolicy";

export class DmsExportPolicyService {
  private repository = new Map<string, DmsExportPolicyModel>();

  public create(data: Omit<DmsExportPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): DmsExportPolicyModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsExportPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsExportPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsExportPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsExportPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsExportPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsExportPolicyModel>): DmsExportPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsExportPolicyModel = {
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
