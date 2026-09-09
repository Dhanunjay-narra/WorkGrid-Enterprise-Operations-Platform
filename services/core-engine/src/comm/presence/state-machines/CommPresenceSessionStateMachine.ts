export type CommPresenceSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommPresenceSessionStateMachine {
  private allowedTransitions: Record<CommPresenceSessionState, CommPresenceSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommPresenceSessionState, to: CommPresenceSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommPresenceSessionState, to: CommPresenceSessionState): CommPresenceSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommPresenceSession: " + from + " -> " + to);
    }
    return to;
  }
}
