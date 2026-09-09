export type TenancyMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class TenancyMetricStateMachine {
  private allowedTransitions: Record<TenancyMetricState, TenancyMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: TenancyMetricState, to: TenancyMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: TenancyMetricState, to: TenancyMetricState): TenancyMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for TenancyMetric: " + from + " -> " + to);
    }
    return to;
  }
}
