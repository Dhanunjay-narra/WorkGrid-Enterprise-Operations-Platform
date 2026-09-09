import { DmsExportNodeModel, DmsExportNodeValidator } from "@nexora/types/domains/dms/export/DmsExportNode";

export class DmsExportNodeService {
  private repository = new Map<string, DmsExportNodeModel>();

  public create(data: Omit<DmsExportNodeModel, "id" | "version" | "createdAt" | "updatedAt">): DmsExportNodeModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsExportNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsExportNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsExportNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsExportNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsExportNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsExportNodeModel>): DmsExportNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsExportNodeModel = {
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
