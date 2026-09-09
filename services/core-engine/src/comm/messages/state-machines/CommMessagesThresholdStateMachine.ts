export type CommMessagesThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommMessagesThresholdStateMachine {
  private allowedTransitions: Record<CommMessagesThresholdState, CommMessagesThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommMessagesThresholdState, to: CommMessagesThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommMessagesThresholdState, to: CommMessagesThresholdState): CommMessagesThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommMessagesThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
