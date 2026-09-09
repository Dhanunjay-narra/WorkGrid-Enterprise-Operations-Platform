export type CommCallsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommCallsTaskStateMachine {
  private allowedTransitions: Record<CommCallsTaskState, CommCallsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommCallsTaskState, to: CommCallsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommCallsTaskState, to: CommCallsTaskState): CommCallsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommCallsTask: " + from + " -> " + to);
    }
    return to;
  }
}
