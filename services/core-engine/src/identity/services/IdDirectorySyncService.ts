import { IdDirectorySyncData, IdDirectorySyncValidator } from "../../../../packages/types/src/domains/identity/IdDirectorySync";

export class IdDirectorySyncService {
  private repository = new Map<string, IdDirectorySyncData>();

  public create(data: Omit<IdDirectorySyncData, "id" | "createdAt" | "updatedAt">): IdDirectorySyncData {
    const id = "ide_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IdDirectorySyncData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdDirectorySyncValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdDirectorySync: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdDirectorySyncData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IdDirectorySyncData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IdDirectorySyncData>): IdDirectorySyncData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdDirectorySyncData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
