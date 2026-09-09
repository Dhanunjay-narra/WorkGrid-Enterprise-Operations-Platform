export type CommMessagesTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommMessagesTaskStateMachine {
  private allowedTransitions: Record<CommMessagesTaskState, CommMessagesTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommMessagesTaskState, to: CommMessagesTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommMessagesTaskState, to: CommMessagesTaskState): CommMessagesTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommMessagesTask: " + from + " -> " + to);
    }
    return to;
  }
}
