export type InventoryReorderRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryReorderRecordStateMachine {
  private allowedTransitions: Record<InventoryReorderRecordState, InventoryReorderRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryReorderRecordState, to: InventoryReorderRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryReorderRecordState, to: InventoryReorderRecordState): InventoryReorderRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryReorderRecord: " + from + " -> " + to);
    }
    return to;
  }
}
