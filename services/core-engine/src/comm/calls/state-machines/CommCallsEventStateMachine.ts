export type CommCallsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommCallsEventStateMachine {
  private allowedTransitions: Record<CommCallsEventState, CommCallsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommCallsEventState, to: CommCallsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommCallsEventState, to: CommCallsEventState): CommCallsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommCallsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
