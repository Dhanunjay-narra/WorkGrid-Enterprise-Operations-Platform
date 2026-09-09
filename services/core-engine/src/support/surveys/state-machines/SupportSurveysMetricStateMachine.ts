export type SupportSurveysMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportSurveysMetricStateMachine {
  private allowedTransitions: Record<SupportSurveysMetricState, SupportSurveysMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportSurveysMetricState, to: SupportSurveysMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportSurveysMetricState, to: SupportSurveysMetricState): SupportSurveysMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportSurveysMetric: " + from + " -> " + to);
    }
    return to;
  }
}
