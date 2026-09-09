export type CommCallsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommCallsSessionStateMachine {
  private allowedTransitions: Record<CommCallsSessionState, CommCallsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommCallsSessionState, to: CommCallsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommCallsSessionState, to: CommCallsSessionState): CommCallsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommCallsSession: " + from + " -> " + to);
    }
    return to;
  }
}
