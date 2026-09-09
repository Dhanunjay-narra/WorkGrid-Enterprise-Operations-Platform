export type IntSyncNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSyncNodeStateMachine {
  private allowedTransitions: Record<IntSyncNodeState, IntSyncNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSyncNodeState, to: IntSyncNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSyncNodeState, to: IntSyncNodeState): IntSyncNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSyncNode: " + from + " -> " + to);
    }
    return to;
  }
}
