export type SupportSlaMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSlaMetricStateMachine {
  private allowedTransitions: Record<SupportSlaMetricState, SupportSlaMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSlaMetricState, to: SupportSlaMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSlaMetricState, to: SupportSlaMetricState): SupportSlaMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSlaMetric: " + from + " -> " + to);
    }
    return to;
  }
}
