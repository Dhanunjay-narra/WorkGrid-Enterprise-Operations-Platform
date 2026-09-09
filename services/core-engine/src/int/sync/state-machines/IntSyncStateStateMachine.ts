export type IntSyncStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSyncStateStateMachine {
  private allowedTransitions: Record<IntSyncStateState, IntSyncStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSyncStateState, to: IntSyncStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSyncStateState, to: IntSyncStateState): IntSyncStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSyncState: " + from + " -> " + to);
    }
    return to;
  }
}
