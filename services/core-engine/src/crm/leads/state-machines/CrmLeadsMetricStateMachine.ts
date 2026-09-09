export type CrmLeadsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmLeadsMetricStateMachine {
  private allowedTransitions: Record<CrmLeadsMetricState, CrmLeadsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmLeadsMetricState, to: CrmLeadsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmLeadsMetricState, to: CrmLeadsMetricState): CrmLeadsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmLeadsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
