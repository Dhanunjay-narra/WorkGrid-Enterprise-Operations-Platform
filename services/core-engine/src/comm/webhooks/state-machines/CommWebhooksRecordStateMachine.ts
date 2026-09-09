export type CommWebhooksRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommWebhooksRecordStateMachine {
  private allowedTransitions: Record<CommWebhooksRecordState, CommWebhooksRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommWebhooksRecordState, to: CommWebhooksRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommWebhooksRecordState, to: CommWebhooksRecordState): CommWebhooksRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommWebhooksRecord: " + from + " -> " + to);
    }
    return to;
  }
}
