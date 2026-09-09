export type BiForecastsAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiForecastsAssignmentStateMachine {
  private allowedTransitions: Record<BiForecastsAssignmentState, BiForecastsAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiForecastsAssignmentState, to: BiForecastsAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiForecastsAssignmentState, to: BiForecastsAssignmentState): BiForecastsAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiForecastsAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
