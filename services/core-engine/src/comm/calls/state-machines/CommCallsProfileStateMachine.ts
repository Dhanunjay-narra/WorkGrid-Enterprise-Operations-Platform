export type CommCallsProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommCallsProfileStateMachine {
  private allowedTransitions: Record<CommCallsProfileState, CommCallsProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommCallsProfileState, to: CommCallsProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommCallsProfileState, to: CommCallsProfileState): CommCallsProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommCallsProfile: " + from + " -> " + to);
    }
    return to;
  }
}
