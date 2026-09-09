import { DmsFilesSessionModel, DmsFilesSessionValidator } from "@nexora/types/domains/dms/files/DmsFilesSession";

export class DmsFilesSessionService {
  private repository = new Map<string, DmsFilesSessionModel>();

  public create(data: Omit<DmsFilesSessionModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFilesSessionModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFilesSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFilesSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFilesSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFilesSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFilesSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFilesSessionModel>): DmsFilesSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFilesSessionModel = {
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
