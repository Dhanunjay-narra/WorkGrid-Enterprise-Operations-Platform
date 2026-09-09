export type FinanceForecastPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceForecastPolicyStateMachine {
  private allowedTransitions: Record<FinanceForecastPolicyState, FinanceForecastPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceForecastPolicyState, to: FinanceForecastPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceForecastPolicyState, to: FinanceForecastPolicyState): FinanceForecastPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceForecastPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
