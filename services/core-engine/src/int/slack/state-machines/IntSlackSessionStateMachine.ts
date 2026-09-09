export type IntSlackSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSlackSessionStateMachine {
  private allowedTransitions: Record<IntSlackSessionState, IntSlackSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSlackSessionState, to: IntSlackSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSlackSessionState, to: IntSlackSessionState): IntSlackSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSlackSession: " + from + " -> " + to);
    }
    return to;
  }
}
