import { DmsExportProfileModel, DmsExportProfileValidator } from "@nexora/types/domains/dms/export/DmsExportProfile";

export class DmsExportProfileService {
  private repository = new Map<string, DmsExportProfileModel>();

  public create(data: Omit<DmsExportProfileModel, "id" | "version" | "createdAt" | "updatedAt">): DmsExportProfileModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsExportProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsExportProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsExportProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsExportProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsExportProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsExportProfileModel>): DmsExportProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsExportProfileModel = {
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
