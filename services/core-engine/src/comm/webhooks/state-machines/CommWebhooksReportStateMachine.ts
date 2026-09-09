export type CommWebhooksReportState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommWebhooksReportStateMachine {
  private allowedTransitions: Record<CommWebhooksReportState, CommWebhooksReportState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommWebhooksReportState, to: CommWebhooksReportState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommWebhooksReportState, to: CommWebhooksReportState): CommWebhooksReportState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommWebhooksReport: " + from + " -> " + to);
    }
    return to;
  }
}
