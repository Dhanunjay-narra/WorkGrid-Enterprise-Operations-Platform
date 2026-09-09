export type CrmForecastingConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmForecastingConfigStateMachine {
  private allowedTransitions: Record<CrmForecastingConfigState, CrmForecastingConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmForecastingConfigState, to: CrmForecastingConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmForecastingConfigState, to: CrmForecastingConfigState): CrmForecastingConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmForecastingConfig: " + from + " -> " + to);
    }
    return to;
  }
}
