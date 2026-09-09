export type CommDigestTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommDigestTaskStateMachine {
  private allowedTransitions: Record<CommDigestTaskState, CommDigestTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommDigestTaskState, to: CommDigestTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommDigestTaskState, to: CommDigestTaskState): CommDigestTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommDigestTask: " + from + " -> " + to);
    }
    return to;
  }
}
