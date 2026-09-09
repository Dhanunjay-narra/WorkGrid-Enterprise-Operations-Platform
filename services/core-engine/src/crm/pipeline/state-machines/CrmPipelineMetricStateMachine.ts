export type CrmPipelineMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmPipelineMetricStateMachine {
  private allowedTransitions: Record<CrmPipelineMetricState, CrmPipelineMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmPipelineMetricState, to: CrmPipelineMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmPipelineMetricState, to: CrmPipelineMetricState): CrmPipelineMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmPipelineMetric: " + from + " -> " + to);
    }
    return to;
  }
}
