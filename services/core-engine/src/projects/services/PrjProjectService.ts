import { PrjProjectData, PrjProjectValidator } from "../../../../packages/types/src/domains/projects/PrjProject";

export class PrjProjectService {
  private repository = new Map<string, PrjProjectData>();

  public create(data: Omit<PrjProjectData, "id" | "createdAt" | "updatedAt">): PrjProjectData {
    const id = "pro_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: PrjProjectData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = PrjProjectValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for PrjProject: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): PrjProjectData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): PrjProjectData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<PrjProjectData>): PrjProjectData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: PrjProjectData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
