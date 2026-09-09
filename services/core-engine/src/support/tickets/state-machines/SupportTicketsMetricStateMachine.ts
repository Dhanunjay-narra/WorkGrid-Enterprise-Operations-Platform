export type SupportTicketsMetricState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportTicketsMetricStateMachine {
  private allowedTransitions: Record<SupportTicketsMetricState, SupportTicketsMetricState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportTicketsMetricState, to: SupportTicketsMetricState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportTicketsMetricState, to: SupportTicketsMetricState): SupportTicketsMetricState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportTicketsMetric: " + from + " -> " + to);
    }
    return to;
  }
}
