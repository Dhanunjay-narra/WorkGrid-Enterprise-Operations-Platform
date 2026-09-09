export type IntSyncItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSyncItemStateMachine {
  private allowedTransitions: Record<IntSyncItemState, IntSyncItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSyncItemState, to: IntSyncItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSyncItemState, to: IntSyncItemState): IntSyncItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSyncItem: " + from + " -> " + to);
    }
    return to;
  }
}
