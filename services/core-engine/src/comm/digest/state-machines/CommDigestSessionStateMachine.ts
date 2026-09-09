export type CommDigestSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommDigestSessionStateMachine {
  private allowedTransitions: Record<CommDigestSessionState, CommDigestSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommDigestSessionState, to: CommDigestSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommDigestSessionState, to: CommDigestSessionState): CommDigestSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommDigestSession: " + from + " -> " + to);
    }
    return to;
  }
}
