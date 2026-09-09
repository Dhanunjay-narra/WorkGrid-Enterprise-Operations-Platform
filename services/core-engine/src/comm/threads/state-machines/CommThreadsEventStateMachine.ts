export type CommThreadsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommThreadsEventStateMachine {
  private allowedTransitions: Record<CommThreadsEventState, CommThreadsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommThreadsEventState, to: CommThreadsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommThreadsEventState, to: CommThreadsEventState): CommThreadsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommThreadsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
