export type CommThreadsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommThreadsTaskStateMachine {
  private allowedTransitions: Record<CommThreadsTaskState, CommThreadsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommThreadsTaskState, to: CommThreadsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommThreadsTaskState, to: CommThreadsTaskState): CommThreadsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommThreadsTask: " + from + " -> " + to);
    }
    return to;
  }
}
