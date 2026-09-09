import { PrjWorkspaceData, PrjWorkspaceValidator } from "../../../../packages/types/src/domains/projects/PrjWorkspace";

export class PrjWorkspaceService {
  private repository = new Map<string, PrjWorkspaceData>();

  public create(data: Omit<PrjWorkspaceData, "id" | "createdAt" | "updatedAt">): PrjWorkspaceData {
    const id = "pro_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: PrjWorkspaceData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = PrjWorkspaceValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for PrjWorkspace: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): PrjWorkspaceData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): PrjWorkspaceData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<PrjWorkspaceData>): PrjWorkspaceData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: PrjWorkspaceData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
