export type CrmForecastingNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmForecastingNodeStateMachine {
  private allowedTransitions: Record<CrmForecastingNodeState, CrmForecastingNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmForecastingNodeState, to: CrmForecastingNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmForecastingNodeState, to: CrmForecastingNodeState): CrmForecastingNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmForecastingNode: " + from + " -> " + to);
    }
    return to;
  }
}
