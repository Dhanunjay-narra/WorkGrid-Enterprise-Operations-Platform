import { DmsFilesNodeModel, DmsFilesNodeValidator } from "@nexora/types/domains/dms/files/DmsFilesNode";

export class DmsFilesNodeService {
  private repository = new Map<string, DmsFilesNodeModel>();

  public create(data: Omit<DmsFilesNodeModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFilesNodeModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFilesNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFilesNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFilesNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFilesNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFilesNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFilesNodeModel>): DmsFilesNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFilesNodeModel = {
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
