export type CrmTerritoryMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmTerritoryMetricStateMachine {
  private allowedTransitions: Record<CrmTerritoryMetricState, CrmTerritoryMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmTerritoryMetricState, to: CrmTerritoryMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmTerritoryMetricState, to: CrmTerritoryMetricState): CrmTerritoryMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmTerritoryMetric: " + from + " -> " + to);
    }
    return to;
  }
}
