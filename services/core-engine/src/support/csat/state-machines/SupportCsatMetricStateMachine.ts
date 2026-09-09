export type SupportCsatMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportCsatMetricStateMachine {
  private allowedTransitions: Record<SupportCsatMetricState, SupportCsatMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportCsatMetricState, to: SupportCsatMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportCsatMetricState, to: SupportCsatMetricState): SupportCsatMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportCsatMetric: " + from + " -> " + to);
    }
    return to;
  }
}
