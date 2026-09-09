export type CommThreadsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommThreadsSessionStateMachine {
  private allowedTransitions: Record<CommThreadsSessionState, CommThreadsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommThreadsSessionState, to: CommThreadsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommThreadsSessionState, to: CommThreadsSessionState): CommThreadsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommThreadsSession: " + from + " -> " + to);
    }
    return to;
  }
}
