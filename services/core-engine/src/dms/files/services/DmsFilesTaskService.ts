import { DmsFilesTaskModel, DmsFilesTaskValidator } from "@nexora/types/domains/dms/files/DmsFilesTask";

export class DmsFilesTaskService {
  private repository = new Map<string, DmsFilesTaskModel>();

  public create(data: Omit<DmsFilesTaskModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFilesTaskModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFilesTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFilesTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFilesTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFilesTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFilesTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFilesTaskModel>): DmsFilesTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFilesTaskModel = {
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
