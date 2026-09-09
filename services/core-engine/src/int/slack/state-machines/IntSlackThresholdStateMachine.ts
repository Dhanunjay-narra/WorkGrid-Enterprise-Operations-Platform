export type IntSlackThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSlackThresholdStateMachine {
  private allowedTransitions: Record<IntSlackThresholdState, IntSlackThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSlackThresholdState, to: IntSlackThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSlackThresholdState, to: IntSlackThresholdState): IntSlackThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSlackThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
