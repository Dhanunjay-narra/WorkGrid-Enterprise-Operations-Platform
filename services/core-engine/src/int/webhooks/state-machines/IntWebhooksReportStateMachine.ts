export type IntWebhooksReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntWebhooksReportStateMachine {
  private allowedTransitions: Record<IntWebhooksReportState, IntWebhooksReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntWebhooksReportState, to: IntWebhooksReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntWebhooksReportState, to: IntWebhooksReportState): IntWebhooksReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntWebhooksReport: " + from + " -> " + to);
    }
    return to;
  }
}
