export type InventoryReorderSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventoryReorderSnapshotStateMachine {
  private allowedTransitions: Record<InventoryReorderSnapshotState, InventoryReorderSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventoryReorderSnapshotState, to: InventoryReorderSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventoryReorderSnapshotState, to: InventoryReorderSnapshotState): InventoryReorderSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventoryReorderSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
