export type CommThreadsConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommThreadsConfigStateMachine {
  private allowedTransitions: Record<CommThreadsConfigState, CommThreadsConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommThreadsConfigState, to: CommThreadsConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommThreadsConfigState, to: CommThreadsConfigState): CommThreadsConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommThreadsConfig: " + from + " -> " + to);
    }
    return to;
  }
}
