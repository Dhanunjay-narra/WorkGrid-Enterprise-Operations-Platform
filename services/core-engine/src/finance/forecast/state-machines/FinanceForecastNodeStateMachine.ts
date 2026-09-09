export type FinanceForecastNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceForecastNodeStateMachine {
  private allowedTransitions: Record<FinanceForecastNodeState, FinanceForecastNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceForecastNodeState, to: FinanceForecastNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceForecastNodeState, to: FinanceForecastNodeState): FinanceForecastNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceForecastNode: " + from + " -> " + to);
    }
    return to;
  }
}
