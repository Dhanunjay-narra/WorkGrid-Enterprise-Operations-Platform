export type FinanceForecastAssignmentState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceForecastAssignmentStateMachine {
  private allowedTransitions: Record<FinanceForecastAssignmentState, FinanceForecastAssignmentState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceForecastAssignmentState, to: FinanceForecastAssignmentState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceForecastAssignmentState, to: FinanceForecastAssignmentState): FinanceForecastAssignmentState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceForecastAssignment: " + from + " -> " + to);
    }
    return to;
  }
}
