import { IdSessionData, IdSessionValidator } from "../../../../packages/types/src/domains/identity/IdSession";

export class IdSessionService {
  private repository = new Map<string, IdSessionData>();

  public create(data: Omit<IdSessionData, "id" | "createdAt" | "updatedAt">): IdSessionData {
    const id = "ide_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IdSessionData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdSessionData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IdSessionData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IdSessionData>): IdSessionData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdSessionData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
