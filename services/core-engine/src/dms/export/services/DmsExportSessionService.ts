import { DmsExportSessionModel, DmsExportSessionValidator } from "@nexora/types/domains/dms/export/DmsExportSession";

export class DmsExportSessionService {
  private repository = new Map<string, DmsExportSessionModel>();

  public create(data: Omit<DmsExportSessionModel, "id" | "version" | "createdAt" | "updatedAt">): DmsExportSessionModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsExportSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsExportSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsExportSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsExportSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsExportSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsExportSessionModel>): DmsExportSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsExportSessionModel = {
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
