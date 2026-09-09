export type CommWebhooksMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommWebhooksMappingStateMachine {
  private allowedTransitions: Record<CommWebhooksMappingState, CommWebhooksMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommWebhooksMappingState, to: CommWebhooksMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommWebhooksMappingState, to: CommWebhooksMappingState): CommWebhooksMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommWebhooksMapping: " + from + " -> " + to);
    }
    return to;
  }
}
