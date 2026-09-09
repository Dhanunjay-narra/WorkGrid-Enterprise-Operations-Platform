export type IntSyncSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSyncSessionStateMachine {
  private allowedTransitions: Record<IntSyncSessionState, IntSyncSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSyncSessionState, to: IntSyncSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSyncSessionState, to: IntSyncSessionState): IntSyncSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSyncSession: " + from + " -> " + to);
    }
    return to;
  }
}
