export type IntStripeReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntStripeReportStateMachine {
  private allowedTransitions: Record<IntStripeReportState, IntStripeReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntStripeReportState, to: IntStripeReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntStripeReportState, to: IntStripeReportState): IntStripeReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntStripeReport: " + from + " -> " + to);
    }
    return to;
  }
}
