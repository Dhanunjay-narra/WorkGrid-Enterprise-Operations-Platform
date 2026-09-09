export type InventorySuppliersSnapshotState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class InventorySuppliersSnapshotStateMachine {
  private allowedTransitions: Record<InventorySuppliersSnapshotState, InventorySuppliersSnapshotState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: InventorySuppliersSnapshotState, to: InventorySuppliersSnapshotState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: InventorySuppliersSnapshotState, to: InventorySuppliersSnapshotState): InventorySuppliersSnapshotState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for InventorySuppliersSnapshot: " + from + " -> " + to);
    }
    return to;
  }
}
