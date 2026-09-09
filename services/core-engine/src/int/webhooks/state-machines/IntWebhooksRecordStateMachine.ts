export type IntWebhooksRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntWebhooksRecordStateMachine {
  private allowedTransitions: Record<IntWebhooksRecordState, IntWebhooksRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntWebhooksRecordState, to: IntWebhooksRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntWebhooksRecordState, to: IntWebhooksRecordState): IntWebhooksRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntWebhooksRecord: " + from + " -> " + to);
    }
    return to;
  }
}
