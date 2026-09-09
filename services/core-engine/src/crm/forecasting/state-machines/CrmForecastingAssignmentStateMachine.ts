export type CrmForecastingAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmForecastingAssignmentStateMachine {
  private allowedTransitions: Record<CrmForecastingAssignmentState, CrmForecastingAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmForecastingAssignmentState, to: CrmForecastingAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmForecastingAssignmentState, to: CrmForecastingAssignmentState): CrmForecastingAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmForecastingAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
