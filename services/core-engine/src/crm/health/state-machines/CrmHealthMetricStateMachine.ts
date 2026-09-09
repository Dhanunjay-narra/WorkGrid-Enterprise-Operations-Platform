export type CrmHealthMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmHealthMetricStateMachine {
  private allowedTransitions: Record<CrmHealthMetricState, CrmHealthMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmHealthMetricState, to: CrmHealthMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmHealthMetricState, to: CrmHealthMetricState): CrmHealthMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmHealthMetric: " + from + " -> " + to);
    }
    return to;
  }
}
