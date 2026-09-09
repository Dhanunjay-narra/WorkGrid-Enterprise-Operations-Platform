import { CommTypingStateData, CommTypingStateValidator } from "../../../../packages/types/src/domains/communication/CommTypingState";

export class CommTypingStateService {
  private repository = new Map<string, CommTypingStateData>();

  public create(data: Omit<CommTypingStateData, "id" | "createdAt" | "updatedAt">): CommTypingStateData {
    const id = "com_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CommTypingStateData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommTypingStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommTypingState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommTypingStateData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CommTypingStateData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CommTypingStateData>): CommTypingStateData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommTypingStateData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
