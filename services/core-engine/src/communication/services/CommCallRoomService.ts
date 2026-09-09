import { CommCallRoomData, CommCallRoomValidator } from "../../../../packages/types/src/domains/communication/CommCallRoom";

export class CommCallRoomService {
  private repository = new Map<string, CommCallRoomData>();

  public create(data: Omit<CommCallRoomData, "id" | "createdAt" | "updatedAt">): CommCallRoomData {
    const id = "com_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CommCallRoomData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommCallRoomValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommCallRoom: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommCallRoomData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CommCallRoomData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CommCallRoomData>): CommCallRoomData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommCallRoomData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
