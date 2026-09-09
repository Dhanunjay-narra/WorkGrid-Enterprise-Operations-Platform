import { PrjKanbanColumnData, PrjKanbanColumnValidator } from "../../../../packages/types/src/domains/projects/PrjKanbanColumn";

export class PrjKanbanColumnService {
  private repository = new Map<string, PrjKanbanColumnData>();

  public create(data: Omit<PrjKanbanColumnData, "id" | "createdAt" | "updatedAt">): PrjKanbanColumnData {
    const id = "pro_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: PrjKanbanColumnData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = PrjKanbanColumnValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for PrjKanbanColumn: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): PrjKanbanColumnData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): PrjKanbanColumnData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<PrjKanbanColumnData>): PrjKanbanColumnData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: PrjKanbanColumnData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
