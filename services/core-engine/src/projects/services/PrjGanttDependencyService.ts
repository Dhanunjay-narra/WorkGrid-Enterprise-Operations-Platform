import { PrjGanttDependencyData, PrjGanttDependencyValidator } from "../../../../packages/types/src/domains/projects/PrjGanttDependency";

export class PrjGanttDependencyService {
  private repository = new Map<string, PrjGanttDependencyData>();

  public create(data: Omit<PrjGanttDependencyData, "id" | "createdAt" | "updatedAt">): PrjGanttDependencyData {
    const id = "pro_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: PrjGanttDependencyData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = PrjGanttDependencyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for PrjGanttDependency: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): PrjGanttDependencyData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): PrjGanttDependencyData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<PrjGanttDependencyData>): PrjGanttDependencyData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: PrjGanttDependencyData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
