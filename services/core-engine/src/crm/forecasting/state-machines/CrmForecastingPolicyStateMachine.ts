export type CrmForecastingPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmForecastingPolicyStateMachine {
  private allowedTransitions: Record<CrmForecastingPolicyState, CrmForecastingPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmForecastingPolicyState, to: CrmForecastingPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmForecastingPolicyState, to: CrmForecastingPolicyState): CrmForecastingPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmForecastingPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
