export type IntSyncEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSyncEventStateMachine {
  private allowedTransitions: Record<IntSyncEventState, IntSyncEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSyncEventState, to: IntSyncEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSyncEventState, to: IntSyncEventState): IntSyncEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSyncEvent: " + from + " -> " + to);
    }
    return to;
  }
}
