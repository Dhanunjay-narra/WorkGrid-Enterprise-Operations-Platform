export type CommMessagesSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommMessagesSessionStateMachine {
  private allowedTransitions: Record<CommMessagesSessionState, CommMessagesSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommMessagesSessionState, to: CommMessagesSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommMessagesSessionState, to: CommMessagesSessionState): CommMessagesSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommMessagesSession: " + from + " -> " + to);
    }
    return to;
  }
}
