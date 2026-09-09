export type CommThreadsProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommThreadsProfileStateMachine {
  private allowedTransitions: Record<CommThreadsProfileState, CommThreadsProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommThreadsProfileState, to: CommThreadsProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommThreadsProfileState, to: CommThreadsProfileState): CommThreadsProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommThreadsProfile: " + from + " -> " + to);
    }
    return to;
  }
}
